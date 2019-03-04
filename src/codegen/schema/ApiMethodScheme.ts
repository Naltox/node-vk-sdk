import ApiMethodParam from "./ApiMethodParam";
import {Type} from "../types/Type";

export default class ApiMethodScheme {
    constructor(
        readonly name: string,
        readonly params: ApiMethodParam[],
        readonly responseType: Type,
        readonly description: string,
        readonly isSuperClass: boolean
    ) {

    }
}