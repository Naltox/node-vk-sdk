import {Type} from "./Type";

export default class VectorType implements Type {
    constructor(readonly item: Type) {

    }
}