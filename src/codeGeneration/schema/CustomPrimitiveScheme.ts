import {Type} from "../types/Type";

/**
 * Represents serializable primitive
 *
 *
 */

export default class CustomPrimitiveScheme {
    constructor(
        readonly name: string,
        readonly type: Type
    ) {

    }
}