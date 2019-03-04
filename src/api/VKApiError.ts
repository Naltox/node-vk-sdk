export default class VKApiError extends Error {
    constructor(
        readonly errorCode: number,
        readonly errorMsg: string,
        readonly requestParams: any
    ) {
        super(errorMsg || errorCode.toString())
    }

    static deserialize(raw: any): VKApiError {
        return new VKApiError(
            raw['error_code'],
            raw['error_msg'],
            raw['request_params']
        )
    }
}