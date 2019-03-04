import {BaseLogger} from "../log/BaseLogger";
import CallbackQueue from "./CallbackQueue";
import VKApiError from "./VKApiError";

const req = require('tiny_request')

const REQUESTS_PER_SECOND = 3
const TIMEOUT = 5000 // 5 seconds
const API_BASE_URL = 'https://api.vk.com/method/'
const API_VERSION = '5.73'

export interface VKApiOptions {
    lang?: string | number,
    testMode?: number,
    logger?: BaseLogger,
    token?: string,
    timeout?: number,
    requestsPerSecond?: number,
    useQueue?: boolean
}

export class BaseVKApi {
    private _lang: string | number | undefined
    private _testMode: number | undefined
    private _logger: BaseLogger | undefined
    private _queue: CallbackQueue | undefined
    private _timeout: number
    private _token

    constructor(options: VKApiOptions) {
        this._logger = options.logger
        this._token = options.token
        this._timeout = options.timeout || TIMEOUT
        this._lang = options.lang
        this._testMode = options.testMode

        if (options.useQueue)
            this._queue = new CallbackQueue(options.requestsPerSecond || REQUESTS_PER_SECOND)
    }

    public async call(method: string, params: Object): Promise<any> {
        params = this.filterParams(params)

        if (params['lang'] == undefined && this._lang != undefined)
            params['lang'] = this._lang

        if (params['testMode'] == undefined && this._testMode != undefined)
            params['testMode'] = this._testMode

        params['v'] = API_VERSION
        params['access_token'] = params['access_token'] || this._token

        if (params['access_token'] == undefined)
            delete params['access_token']

        return new Promise((resolve, reject) => {
            let reqFunc = () => {
                req.post({
                    url: API_BASE_URL + method,
                    query: params,
                    json: true,
                    timeout: this._timeout
                }, (body, response, err) => {
                    this.handleResponse(
                        method,
                        params,
                        body,
                        response,
                        err,
                        resolve,
                        reject
                    )
                })
            }

            if (this._queue)
                this._queue.push(reqFunc)
            else
                reqFunc()
        })
    }

    /**
     * Makes api call and if there was
     * server-side error or requests limit was reached
     * repeats the call after some timeout
     */
    public async callWithRetry(method: string, params: Object): Promise<any> {
        return new Promise((resolve, reject) => {
            let makeCall = (
                resolve: any,
                reject: any,
                method: string,
                params: Object,
                useQueue = true
            ) => {
                this.call(method, params)
                    .then(r => {
                        resolve(r)
                    })
                    .catch(e => {
                        if (e instanceof VKApiError) {
                            /**
                             * 6 - too many requests per second
                             * 10 - internal server error
                             */
                            if (e.errorCode == 6 || e.errorCode == 10) {
                                setTimeout(() => {
                                    makeCall(
                                        resolve,
                                        reject,
                                        method,
                                        params,
                                        useQueue
                                    )
                                }, 300)
                            }

                            reject(e)
                        }
                        else {
                            /**
                             * Networking error
                             */
                            setTimeout(() => {
                                makeCall(
                                    resolve,
                                    reject,
                                    method,
                                    params,
                                    useQueue
                                )
                            }, 300)
                        }
                    })
            }

            makeCall(
                resolve,
                reject,
                method,
                params,
            )
        })
    }

    private handleResponse(method, params, body, response, err, resolve, reject) {
        if (!err && response.statusCode == 200 && !body.error) {
            resolve(body.response)
            return
        }

        if (body && body.error) {
            reject(VKApiError.deserialize(body.error))

            if (this._logger)
                this._logger.warn('VK Api error\n', {
                    response: JSON.stringify(body),
                    error: VKApiError.deserialize(body.error),
                    method,
                    params
                })

            return
        }

        if (err) {
            if (this._logger)
                this._logger.error('VK Api:\n', {
                    'Networking error:': err,
                    method,
                    params
                })

            reject(err)
            return
        }

        if (this._logger)
            this._logger.error('VK Api:\n', {
                'api request error: Body:': body,
                'Error:': err
            })

        reject(err)
    }

    private filterParams(params: Object): Object {
        for (let paramName in params) {
            if (params[paramName] == undefined) {
                delete params[paramName]
            }
        }

        return params
    }
}