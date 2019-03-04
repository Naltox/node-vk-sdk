import ClassField from "./ClassField";

export default class ClassScheme {
    constructor(
        readonly name: string,
        readonly fields: ClassField[]
    ) {

    }
}