import {ConsoleLogger} from "../log/ConsoleLogger";

const OBJECTS = require('../vk-api-schema/objects.json')
const RESPONSES = require('../vk-api-schema/responses.json')
const METHODS = require('../vk-api-schema/methods.json')

const logger = new ConsoleLogger()

function validate() {
    logger.log('Validating objects.json')
    validateObjects(OBJECTS)
    logger.log('Validating responses.json')
    validateObjects(RESPONSES)
    logger.log('Validating methods.json')
    validateMethods()
}

validate()

function validateMethods() {
    let objectsSet = new Set<string>()
    for (let method of METHODS.methods) {
        let methodName = method.name
        if (objectsSet.has(methodName)) {
            logger.warn('Duplicate method definition: ' + methodName)
        }
        if (!method.responses.response) {
            logger.warn('Missing response for method' + methodName)
        }
        validateType(method.responses.response, methodName)
        if (method.responses.extendedResponse) {
            validateType(method.responses.extendedResponse, methodName)
        }
        if (method.parameters) {
            let parametersSet = new Set<string>()
            for (let parameter of method.parameters) {
                if (parametersSet.has(parameter.name)) {
                    logger.warn('Duplicate method parameter definition: ' + parameter.name + ' in ' + methodName)
                }
                validateType(parameter, parameter.name)
                parametersSet.add(parameter.name)
            }
        }
        objectsSet.add(methodName)
    }
}

function validateType(schema: any, name: string, path: string[] = []) {
    if (schema.$ref) {
        if (!resolveRef(schema.$ref)) {
            logger.warn('Missing object ' + typeNameFromRef(schema.$ref) + ' required in ' + name)
        }
    } else if (schema.type && schema.type === 'array') {
        if (!schema.items) {
            logger.warn('Missing object array items in ' + JSON.stringify(schema))
        } else if (schema.items.$ref && !resolveRef(schema.items.$ref)) {
            logger.warn('Missing object ' + typeNameFromRef(schema.items.$ref))
        }
    } else if (schema.type === 'object') {
        if (schema.patternProperties) {
            return
        }
        if (schema.allOf) {
            for (let variant of schema.allOf) {
                variant.type = 'object'
                validateType(variant, name)
            }
            return
        }
        if (schema.oneOf) {
            for (let variant of schema.oneOf) {
                variant.type = 'object'
                validateType(variant, name)
            }
            return
        }
        if (!schema.properties) {
            if (path.length > 1) {
                logger.warn('Missing properties in ' + name + ' at ' + path.join('->'))
            } else {
                logger.warn('Missing properties in ' + name)
            }
        }

        let propsSet = new Set<string>()
        for (let propName in schema.properties) {
            if (propsSet.has(propName)) {
                logger.warn('Duplicate property definition: ' + propName + ' in object' + name)
            }
            validateType(schema.properties[propName], propName, [...path, propName])
            propsSet.add(propName)
        }
    }
}

function validateObjects(schema: any) {
    let objectsSet = new Set<string>()
    for (let typeName in schema.definitions) {
        if (objectsSet.has(typeName)) {
            logger.warn('Duplicate object definition: ' + typeName)
        }
        // console.log(schema.definitions[typeName], typeName)
        validateType(schema.definitions[typeName], typeName, [typeName])
        objectsSet.add(typeName)
    }
}

function resolveRef(ref: string): any {
    if (ref.startsWith('objects.json#/definitions/'))
        return OBJECTS.definitions[ref.replace('objects.json#/definitions/', '')]

    if (ref.startsWith('responses.json#/definitions/'))
        return RESPONSES.definitions[ref.replace('responses.json#/definitions/', '')]

    if (ref.startsWith('#/definitions/'))
        return OBJECTS.definitions[ref.replace('#/definitions/', '')]

    return null
}

function typeNameFromRef(ref: string): any {
    return ref.replace('objects.json#/definitions/', '').replace('responses.json#/definitions/', '').replace('#/definitions/', '')
}

