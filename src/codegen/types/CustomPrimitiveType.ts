import {Type} from "./Type";

export default class CustomPrimitiveType implements Type {
    constructor(
        readonly name: string,
    ) {

    }
}