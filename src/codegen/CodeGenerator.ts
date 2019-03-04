import ClassScheme from "./schema/ClassScheme";
import SourceCode from "./SourceCode";
import ApiMethodScheme from "./schema/ApiMethodScheme";
import CustomPrimitiveScheme from "./schema/CustomPrimitiveScheme";

export interface CodeGenerator {
    generateClass(scheme: ClassScheme): SourceCode

    generateInterface(scheme: ClassScheme): SourceCode

    generateCustomPrimitive(scheme: CustomPrimitiveScheme, withoutDeserializeFunc: boolean): SourceCode

    generateApiMethod(scheme: ApiMethodScheme): SourceCode

    generateApiMethodParamsInterface(scheme: ApiMethodScheme): SourceCode
}