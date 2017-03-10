import TypescriptCodeGenerator from "./codeGeneration/TypescriptCodeGenerator";
import ClassScheme from "./codeGeneration/schema/ClassScheme";
import ClassField from "./codeGeneration/schema/ClassField";
import StringType from "./codeGeneration/types/StringType";
import NumberType from "./codeGeneration/types/NumberType";
import VectorType from "./codeGeneration/types/VectorType";
import {toCamelCase} from "./codeGeneration/Utils";
import CustomType from "./codeGeneration/types/CustomType";
import ApiMethodScheme from "./codeGeneration/schema/ApiMethodScheme";
import ApiMethodParam from "./codeGeneration/schema/ApiMethodParam";
import {Type} from "./codeGeneration/types/Type";
import AnyType from "./codeGeneration/types/AnyType";
import IntBoolType from "./codeGeneration/types/IntBoolType";
import BooleanType from "./codeGeneration/types/BooleanType";
import {writeFile} from "fs";
import SourceCode from "./codeGeneration/SourceCode";
import {VKApi} from "./VKApi";

const objects = require('./vk-api-schema/objects.json')
const responses = require('./vk-api-schema/responses.json')
const methods = require('./vk-api-schema/methods.json')

let codeGenerator = new TypescriptCodeGenerator()

const MODELS_FILE = 'Models.ts'
const RESPONSES_FILE = 'Responses.ts'
const METHODS_FILE = 'Methods.ts'
const METHODS_PROPS_FILE = 'MethodsProps.ts'

generate()

async function generate() {
    // let modelsCode: SourceCode[] = []
    //
    // for (let className in objects.definitions) {
    //     if (className == 'base_bool_int') {
    //         continue
    //     }
    //
    //     let classScheme = jsonToClassScheme(className, objects.definitions[className])
    //
    //     modelsCode.push(codeGenerator.generateClass(classScheme))
    // }
    //
    // await saveToFile(__dirname + '/' + MODELS_FILE, modelsCode.map(c => c.render()).join('\n\n'))
    // console.log('models generated')

    let responsesCode: SourceCode[] = []

    for (let className in responses.definitions) {

        let classScheme

        if (responses.definitions[className].properties.response.type == 'object')
            classScheme = jsonToClassScheme(className, responses.definitions[className].properties.response, true)
        else
            classScheme = jsonToClassScheme(className, responses.definitions[className], true)

        if (classScheme.name == 'MessagesGetResponse') {
            console.log(classScheme)
            console.log(classScheme.fields[1])
        }

        responsesCode.push(codeGenerator.generateClass(classScheme))
    }

    await saveToFile(__dirname + '/' + RESPONSES_FILE, responsesCode.map(c => c.render()).join('\n\n'))
    console.log('responses generated')

    // let methodsCode: SourceCode[] = []
    //
    // methods.methods.forEach(method => {
    //     let scheme = jsonToMethodScheme(method)
    //     methodsCode.push(codeGenerator.generateApiMethod(scheme))
    // })
    //
    // await saveToFile(__dirname + '/' + METHODS_FILE, methodsCode.map(c => c.render()).join('\n\n'))
    // console.log('methods generated')
    //
    // let methodsPropsCode: SourceCode[] = []
    //
    // methods.methods.forEach(method => {
    //     let scheme = jsonToMethodScheme(method)
    //     methodsPropsCode.push(codeGenerator.generateApiMethodParamsInterface(scheme))
    // })
    //
    // await saveToFile(__dirname + '/' + METHODS_PROPS_FILE, methodsPropsCode.map(c => c.render()).join('\n\n'))
    // console.log('methods props generated')
}

function jsonToMethodScheme(scheme: any): ApiMethodScheme {
    let params: ApiMethodParam[] = []


    if (scheme.parameters)
        scheme.parameters.forEach(param => {
            params.push(new ApiMethodParam(
                param.name,
                parseType(param, true),
                !!param.required,
                param.description
            ))
        })

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
        scheme.description
    )
}

function jsonToClassScheme(name: string, scheme: any, forResponses = false): ClassScheme {
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
        scheme.allOf.forEach(prop => {
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
            // messages_searchDialogs_response || users_getSubscriptions_extended_response
            return new VectorType(new AnyType())
        }

        if (scheme.items.$ref) {
            let name = toCamelCase(normalizePath(scheme.items.$ref), true)

            if (forResponses)
                return new VectorType(new CustomType('Models.' + name))

            return new VectorType(new CustomType(name))
        }

        return new VectorType(parseType(scheme.items, forResponses))
    }

    if (scheme.$ref) {
        if (
            scheme.$ref == '#/definitions/base_bool_int' ||
            scheme.$ref == 'objects.json#/definitions/base_bool_int'
        ) {
            return new IntBoolType()
        }

        let name = toCamelCase(normalizePath(scheme.$ref), true)

        if (forResponses)
            return new CustomType('Models.' + name)

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

    throw { 'UNSUPPORTED TYPE': scheme}
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

async function saveToFile(name: string, data: string): Promise<any> {
    return new Promise((resolve, reject) => {
        writeFile(name, data, err => {
            if (err) {
                reject(err)
                return
            }

            resolve()
        })
    })
}