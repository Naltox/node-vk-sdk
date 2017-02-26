import {CodeGenerator} from "./CodeGenerator";
import ClassScheme from "./schema/ClassScheme";
import SourceCode from "./SourceCode";
import ClassField from "./schema/ClassField";
import StringType from "./types/StringType";
import NumberType from "./types/NumberType";
import AnyType from "./types/AnyType";
import BooleanType from "./types/BooleanType";
import CustomType from "./types/CustomType";
import {Type} from "./types/Type";
import {type} from "os";
import VectorType from "./types/VectorType";
import {toCamelCase} from "./Utils";
import ApiMethodScheme from "./schema/ApiMethodScheme";
import IntBoolType from "./types/IntBoolType";

export default class TypescriptCodeGenerator implements CodeGenerator {
    public generateClass(scheme: ClassScheme): SourceCode {
        let code = new SourceCode()
        let constructor = this.generateClassConstructor(scheme)
        let deserializeMethod = this.generateDeserializeMethod(scheme)

        code.add(`export class ${scheme.name} {`)
        code.append(constructor, 1)
        code.add('')
        code.append(deserializeMethod, 1)
        code.add('}')

        return code
    }

    public generateApiMethod(scheme: ApiMethodScheme): SourceCode {
        let code = new SourceCode()

        let methodName = toCamelCase(scheme.name, false, '.')
        let propsName = `MethodsProps.${toCamelCase(scheme.name, true, '.')}Params`
        let responseName = this.renderType(scheme.responseType, true)

        code.add(`/**`)
        code.add(` * ${scheme.description}`)
        code.add(` */`)
        code.add(`public async ${methodName}(params: ${propsName}): Promise<${responseName}> {`)
        code.add('return this.call(', 1)
        code.add(`'${scheme.name}',`, 2)
        code.add(`{`, 2)
        scheme.params.forEach((param, index) => {
            let coma = this.genComa(scheme.params, index)

            code.add(`${param.name}: params.${toCamelCase(param.name)}${coma}`, 3)
        })
        code.add(`},`, 2)
        code.add(responseName, 2)
        code.add(')', 1)
        code.add('}')

        return code
    }

    public generateApiMethodParamsInterface(scheme: ApiMethodScheme): SourceCode {
        let code = new SourceCode()

        code.add(`export interface ${toCamelCase(scheme.name, true, '.')}Params {`)

        scheme.params.forEach((prop, index) => {
            let coma = this.genComa(scheme.params, index)

            code.add(`/**`, 1)
            code.add(` * ${prop.description}`, 1)
            code.add(` */`, 1)
            code.add(`${toCamelCase(prop.name)}${prop.required ? '' : '?'}: ${this.renderType(prop.type, true)}${coma}`, 1)
        })

        code.add('}')

        return code
    }

    private generateClassConstructor(scheme: ClassScheme): SourceCode {
        let code = new SourceCode()

        code.add('constructor (')

        scheme.fields.forEach((field, index) => {
            let coma = this.genComa(scheme.fields, index)

            code.add(`readonly ${toCamelCase(field.name)}: ${this.renderType(field.type)}${coma}`, 1)
        })

        code.add(') {')
        code.add('')
        code.add('}')

        return code
    }

    private generateDeserializeMethod(scheme: ClassScheme): SourceCode {
        let code = new SourceCode()

        code.add(`static deserialize(raw: Object): ${scheme.name} {`)
        code.add(`return new ${scheme.name} (`, 1)

        scheme.fields.forEach((field, index) => {
            let coma = this.genComa(scheme.fields, index)
            let fieldVar = `raw['${field.name}']`

            if (field.type instanceof VectorType)
                code.add(this.renderVectorDeserialize(fieldVar, field.type) + coma, 2)
            else if (field.type instanceof CustomType)
                code.add(`${fieldVar} ? ${field.type.name}.deserialize(${fieldVar}) : undefined${coma}`, 2)
            else if (field.type instanceof IntBoolType)
                code.add(`!!${fieldVar}${coma}`, 2)
            else
                code.add(fieldVar + coma, 2)
        })

        code.add(`)`, 1)
        code.add('}')

        return code
    }

    private renderType(type: Type, withoutUndefined = false): string {
        if (type instanceof StringType)
            return 'string'

        if (type instanceof NumberType)
            return 'number'

        if (type instanceof AnyType)
            return 'any'

        if (type instanceof BooleanType)
            return 'boolean'

        if (type instanceof IntBoolType)
            return 'boolean'

        if (type instanceof CustomType)
            return type.name + `${!withoutUndefined ? '|undefined' : ''}`

        if (type instanceof VectorType)
            return this.renderType(type.item) + `[]${!withoutUndefined ? '|undefined' : ''}`


        throw { 'UNSUPPORTED TYPE': type }
    }

    private genComa(list: any[], index: number): string {
        return (index == list.length - 1) ? '' : ','
    }

    private renderVectorDeserialize(value: string, type: Type): string {
        let code = ''

        if (type instanceof VectorType)
            code += `${value} ? ${value}.map(v => ${this.renderVectorDeserialize('v', type.item)}) : undefined`
        else if (type instanceof CustomType)
            code += `${value} ? ${type.name}.deserialize(${value}) : undefined`
        else
            code += value

        return code
    }
}