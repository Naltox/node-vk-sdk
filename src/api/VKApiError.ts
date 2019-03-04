export default class VKApiError {
    constructor(
        readonly errorCode: number,
        readonly errorMsg: number,
        readonly requestParams: any
    ) {

    }

    static deserialize(raw: Object): VKApiError {
        return new VKApiError(
            raw['error_code'],
            raw['error_msg'],
            raw['request_params']
        )
    }
}