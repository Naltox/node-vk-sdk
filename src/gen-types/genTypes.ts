import TypescriptCodeGenerator from "../codegen/TypescriptCodeGenerator";
import ClassScheme from "../codegen/schema/ClassScheme";
import ClassField from "../codegen/schema/ClassField";
import StringType from "../codegen/types/StringType";
import NumberType from "../codegen/types/NumberType";
import VectorType from "../codegen/types/VectorType";
import {toCamelCase} from "../codegen/Utils";
import CustomType from "../codegen/types/CustomType";
import ApiMethodScheme from "../codegen/schema/ApiMethodScheme";
import ApiMethodParam from "../codegen/schema/ApiMethodParam";
import {Type} from "../codegen/types/Type";
import AnyType from "../codegen/types/AnyType";
import BooleanType from "../codegen/types/BooleanType";
import {writeFile} from "fs";
import SourceCode from "../codegen/SourceCode";
import AliasClassScheme from "../codegen/schema/AliasClassScheme";
import CustomPrimitiveScheme from "../codegen/schema/CustomPrimitiveScheme";
import CustomPrimitiveType from "../codegen/types/CustomPrimitiveType";
import {ConsoleLogger} from "../log/ConsoleLogger";

const objects = require('../vk-api-schema/objects.json')
const responses = require('../vk-api-schema/responses.json')
const methods = require('../vk-api-schema/methods.json')

const codeGenerator = new TypescriptCodeGenerator()
const logger = new ConsoleLogger()

const MODELS_FILE = 'Models.ts'
const RESPONSES_FILE = 'Responses.ts'
const VKAPI_FILE = 'VKApi.ts'
const METHODS_PROPS_FILE = 'MethodsProps.ts'

const GENERATED_PATH = __dirname + '/../generated/'

main()

async function main() {
    try {
        await generate()
    } catch (e) {
        console.error(e)
    }
}

async function generate() {
    let modelsCode: SourceCode[] = []

    // Hack types missing in schema
    let anyType = {type: 'any', properties: {}}
    let anyResponse = { type: 'object', properties: {response: {type: 'any'}} }

    objects.definitions['account_info'].properties['link_redirects'] = anyType
    objects.definitions['wall_wallpost'].properties['poster'] = anyType
    objects.definitions['callback_message_base'] = anyType
    objects.definitions['notifications_notification_item'] = anyType
    objects.definitions['photos_photo_falseable'] = anyType
    objects.definitions['poster'] = anyType

    // Not supported yet
    responses.definitions['groups_getSettings_response'] = anyResponse
    responses.definitions['messages_send_user_ids_response'] = anyResponse
    responses.definitions['secure_giveEventSticker_response'] = anyResponse


    //
    //  Models
    //
    for (let className in objects.definitions) {
        let classScheme = jsonToClassScheme(className, objects.definitions[className])

        if (classScheme instanceof AliasClassScheme) {
            classScheme = new AliasClassScheme(
                classScheme.name,
                classScheme.fields,
                new ClassScheme(
                    classScheme.aliasClass.name.replace('Models.', ''),
                    classScheme.aliasClass.fields
                )
            )
        }
        if (classScheme instanceof ClassScheme) {
            modelsCode.push(codeGenerator.generateInterface(classScheme))
        }
        if (classScheme instanceof CustomPrimitiveScheme) {
            modelsCode.push(codeGenerator.generateCustomPrimitive(classScheme, true))
        }
    }

    await saveToFile(GENERATED_PATH + MODELS_FILE, modelsCode.map(c => c.render()).join('\n\n'))
    logger.log('models generated')

    //
    //  Responses
    //
    let responsesCode: SourceCode[] = []

    for (let className in responses.definitions) {
        let classScheme = jsonToClassScheme(className, responses.definitions[className].properties.response, true)

        if (classScheme instanceof ClassScheme) {
            responsesCode.push(codeGenerator.generateInterface(classScheme))
        }
        if (classScheme instanceof CustomPrimitiveScheme) {
            responsesCode.push(codeGenerator.generateCustomPrimitive(classScheme, true))
        }
    }

    let responsesFileCode = new SourceCode()
    responsesFileCode.add('import * as Models from "./Models"')
    responsesFileCode.add('')
    responsesCode.forEach(c => responsesFileCode.append(c))
    await saveToFile(GENERATED_PATH + RESPONSES_FILE, responsesFileCode.render())
    logger.log('responses generated')

    //
    //  Methods props
    //
    let methodsPropsCode: SourceCode[] = []

    methods.methods.forEach((method: any) => {
        let scheme = jsonToMethodScheme(method)
        methodsPropsCode.push(codeGenerator.generateApiMethodParamsInterface(scheme))
    })

    await saveToFile(GENERATED_PATH + METHODS_PROPS_FILE, 'import * as Models from "./Models"\n\n' + methodsPropsCode.map(c => c.render()).join('\n\n'))
    logger.log('methods props generated')

    //
    //  VKApi
    //
    let methodsCode: SourceCode[] = []

    methods.methods.forEach((method: any) => {
        let scheme = jsonToMethodScheme(method)
        methodsCode.push(codeGenerator.generateApiMethod(scheme))
    })

    let apiClassCode = new SourceCode()
    apiClassCode.add('import {BaseVKApi} from "../api/BaseVKApi"')
    apiClassCode.add('import * as MethodsProps from "./MethodsProps"')
    apiClassCode.add('import * as Responses from "./Responses"')
    apiClassCode.add('')
    apiClassCode.add('export class VKApi extends BaseVKApi {')
    methodsCode.forEach(c => apiClassCode.append(c, 1))
    apiClassCode.add('}')
    await saveToFile(GENERATED_PATH + VKAPI_FILE, apiClassCode.render())
    logger.log('VKApi generated')
}

function jsonToMethodScheme(scheme: any): ApiMethodScheme {
    let params: ApiMethodParam[] = []

    let paramsSet = new Set<string>()

    if (scheme.parameters) {
        for (let param of scheme.parameters) {
            if (paramsSet.has(param.name)) {
                logger.warn(`Duplicate parameter ${param.name} in ${scheme.name}`)
                continue
            }
            params.push(new ApiMethodParam(
                param.name,
                parseType(param, true),
                !!param.required,
                param.description,
            ))
            paramsSet.add(param.name)
        }
    }

    params.push(
        new ApiMethodParam(
            'access_token',
            new StringType(),
            false,
            'access token'
        )
    )

    return new ApiMethodScheme(
        scheme.name,
        params,
        new CustomType('Responses.' + toCamelCase(normalizePath(scheme.responses.response.$ref), true)),
        scheme.description,
        true
    )
}

function jsonToClassScheme(name: string, scheme: any, forResponses = false): ClassScheme | CustomPrimitiveScheme {
    // just create alias here
    if (scheme.$ref) {
        return new AliasClassScheme(
            toCamelCase(name, true),
            [],
            jsonToClassScheme(
                'Models.' + toCamelCase(normalizePath(scheme.$ref), true),
                getScheme(scheme.$ref)
            ) as ClassScheme
        )
    }

    if (scheme.type !== 'object') {
        return new CustomPrimitiveScheme(
            toCamelCase(name, true),
            parseType(scheme, forResponses)
        )
    }

    let fields: ClassField[] = []

    let props = getSchemeClassProps(scheme)

    for (let propName in props) {
        let name = propName

        if (name == '2fa_required')
            name = 'twoFaRequired'

        if (name == 'class')
            name = 'schoolClass'

        fields.push(
            new ClassField(
                name,
                parseType(props[propName], forResponses),
                props[propName].description || ''
            )
        )
    }

    return new ClassScheme(
        toCamelCase(name, true),
        fields
    )
}

function getSchemeClassProps(scheme: any): any {
    let props = {}

    if (scheme.properties)
        props = {...props, ...scheme.properties}

    if (scheme.allOf) {
        scheme.allOf.forEach((prop: any) => {
            props = {...props, ...getSchemeClassProps(prop)}
        })
    }

    if (scheme.$ref) {
        let typeScheme = getScheme(scheme.$ref)
        props = {...props, ...getSchemeClassProps(typeScheme)}
    }

    return props
}

function parseType(scheme: any, forResponses = false): Type {
    let type = scheme.type

    if (type == 'integer' || type == 'number')
        return new NumberType()

    if (type == 'string')
        return new StringType()

    if (type == 'boolean')
        return new BooleanType()

    if (type == 'array') {
        if (scheme.items.oneOf) {
            return new VectorType(new AnyType())
        }

        if (scheme.items.$ref) {
            let primitive = isPrimitive(scheme.items.$ref)
            let name = toCamelCase(normalizePath(scheme.items.$ref), true)

            if (forResponses) {
                if (primitive)
                    return new VectorType(new CustomPrimitiveType('Models.' + name))

                return new VectorType(new CustomType('Models.' + name))
            }

            if (primitive)
                return new VectorType(new CustomPrimitiveType(name))

            return new VectorType(new CustomType(name))
        }

        return new VectorType(parseType(scheme.items, forResponses))
    }

    if (type == 'any') {
        return new AnyType()
    }

    if (scheme.$ref) {
        let primitive = isPrimitive(scheme.$ref)

        let name = toCamelCase(normalizePath(scheme.$ref), true)

        if (forResponses) {
            if (primitive)
                return new CustomPrimitiveType('Models.' + name)

            return new CustomType('Models.' + name)
        }

        if (primitive)
            return new CustomPrimitiveType(name)

        return new CustomType(name)
    }

    if (Array.isArray(type)) {
        // hack ads_ad.ad_platform
        return new AnyType()
    }

    if (scheme.properties && scheme.properties.count && scheme.properties.items) {
        // convert { cont, items } to array
        return parseType(scheme.properties.items, forResponses)
    }

    if (scheme.allOf) {
        return new AnyType()
    }

    throw {'UNSUPPORTED TYPE': scheme}
}

function getScheme(ref: string): any {
    return objects.definitions[normalizePath(ref)]
}

function normalizePath(path: string): string {
    if (path.indexOf('objects.json#/definitions/') > -1)
        return path.replace('objects.json#/definitions/', '')

    if (path.indexOf('responses.json#/definitions/') > -1)
        return path.replace('responses.json#/definitions/', '')

    return path.replace('#/definitions/', '')
}

function isPrimitive(ref: string): boolean {
    let scheme = getScheme(ref)

    if (scheme.type !== 'object')
        return true

    return false
}

async function saveToFile(name: string, data: string): Promise<any> {
    return new Promise((resolve, reject) => {
        writeFile(name, data, err => {
            if (err) {
                reject(err)
                return
            }

            resolve(true)
        })
    })
}