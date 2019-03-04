import ClassField from "./ClassField";
import ClassScheme from "./ClassScheme";

export default class AliasClassScheme extends ClassScheme {
    constructor(
        readonly name: string,
        readonly fields: ClassField[],
        readonly aliasClass: ClassScheme
    ) {
        super(name, fields)
    }
}