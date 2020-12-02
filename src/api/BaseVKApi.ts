import {BaseLogger} from "../log/BaseLogger";
import VKApiError from "./VKApiError";
import {AsyncQueue, createQueue, delay} from "./time";
import {postRequest} from "./net";

const DEFAULT_REQUESTS_PER_SECOND = 3
const TIMEOUT = 5000 // 5 seconds
const API_BASE_URL = 'https://api.vk.com/method/'
const API_VERSION = '5.126'

export interface VKApiOptions {
    lang?: string | number,
    testMode?: number,
    logger?: BaseLogger,
    token?: string,
    timeout?: number,
    requestsPerSecond?: number,
    useQueue?: boolean
}

type GenericParams = { [key: string]: any }

export class BaseVKApi {
    readonly lang?: string | number
    readonly testMode?: number
    readonly logger?: BaseLogger
    readonly queue?: AsyncQueue<any>
    readonly token?: string
    readonly timeout: number

    constructor(options: VKApiOptions) {
        this.logger = options.logger
        this.token = options.token
        this.timeout = options.timeout || TIMEOUT
        this.lang = options.lang
        this.testMode = options.testMode

        if (options.useQueue)
            this.queue = createQueue(options.requestsPerSecond || DEFAULT_REQUESTS_PER_SECOND)

    }

    public async call(method: string, params: GenericParams): Promise<any> {
        params = this.filterParams(params)

        if (!params['lang'] && !!this.lang)
            params['lang'] = this.lang

        if (!params['testMode'] && !!this.testMode)
            params['testMode'] = this.testMode

        params['v'] = API_VERSION
        params['access_token'] = params['access_token'] || this.token

        if (!params['access_token'])
            delete params['access_token']


        let doRequest = async () => {
            let {body, response, err} = await postRequest(API_BASE_URL + method, params, this.timeout)
            return await this.handleResponse(method, params, response, body, err)
        }

        if (this.queue) {
            return await this.queue.run(async () => doRequest())
        } else {
            return doRequest()
        }
    }

    /**
     * Makes api call and if there was
     * server-side error or requests limit was reached
     * repeats the call after some timeout
     */
    public async callWithRetry(method: string, params: GenericParams, timeout: number = 300): Promise<any> {
        return this.doCallWithRetry(method, params, timeout)
    }

    /**
     * Stops calls queue if have one
     */
    public stopQueue() {
        if (this.queue)
            this.queue.stop()
    }

    private async doCallWithRetry(method: string, params: GenericParams, timeout: number = 300, maxRetryCount: number = 7, retryCounter = 0): Promise<any> {
        try {
            return await this.call(method, params)
        } catch (e) {
            retryCounter++
            if (retryCounter === maxRetryCount) {
                throw e
            }

            if (e instanceof VKApiError) {
                //
                // 6 - too many requests per second
                // 10 - internal server error
                //
                if (e.errorCode == 6 || e.errorCode == 10) {
                    await delay(timeout)
                    return await this.doCallWithRetry(method, params, timeout, maxRetryCount, retryCounter)
                }

                throw e
            } else {
                //
                //  Network error
                //
                await delay(timeout)
                return await this.doCallWithRetry(method, params, timeout, maxRetryCount, retryCounter)
            }
        }
    }

    private async handleResponse(method: string, params: GenericParams, response: any, body: any, err: Error) {
        if (!err && response.statusCode == 200 && !body.error) {
            if (body.execute_errors) {
                return body
            }
            return body.response
        }

        if (body && body.error) {
            if (this.logger) {
                this.logger.warn('VK Api error\n', {
                    response: JSON.stringify(body),
                    error: VKApiError.deserialize(body.error),
                    method,
                    params
                })
            }

            throw VKApiError.deserialize(body.error)
        }

        if (err) {
            if (this.logger) {
                this.logger.error('VK Api:\n', {
                    'Networking error:': err,
                    method,
                    params
                })
            }
            throw err
        }

        if (this.logger) {
            this.logger.error('VK Api:\n', {
                'api request error: Body:': body,
                'Error:': err
            })
        }
        throw err
    }

    private filterParams(params: { [key: string]: any }): Object {
        for (let paramName in params) {
            if (params[paramName] == undefined) {
                delete params[paramName]
            }
        }

        return params
    }
}