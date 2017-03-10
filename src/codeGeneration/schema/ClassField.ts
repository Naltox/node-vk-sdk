import {Type} from "../types/Type";

export default class ClassField {
    constructor(
        readonly name: string,
        readonly type: Type,
        readonly description: string
    ) {

    }
}