import {Type} from "../types/Type";

export default class ApiMethodParam {
    constructor(
        readonly name: string,
        readonly type: Type,
        readonly required: boolean,
        readonly description: string
    ) {

    }
}