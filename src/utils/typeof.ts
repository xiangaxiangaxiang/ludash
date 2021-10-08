import { getType } from './get-type'

function toString(value: any): string {
    return Object.prototype.toString.call(value)
}

export function isEmptyObject(value: any): boolean {
    if (!isPlainObject(value)) {
        return false
    }
    return !!Object.keys(value).length
}

export function isObjectLike(value: any): value is object {
    return !isNull(value) && typeof value === 'object'
}

export function isPlainObject(value: any): value is object {
    if (!isObjectLike(value) || getType(value) !== 'object') {
        return false
    }
    if (Object.getPrototypeOf(value) === null) {
        return true
    }
    let proto = value
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto)
    }
    return proto === Object.getPrototypeOf(value)
}

export const isArray = Array.isArray

export function isNull(value: any): value is null {
    return toString(value) === '[object Null]'
}

export function isUndefined(value: any): value is undefined {
    return toString(value) === '[object Undefined]'
}

export function isString(value: any): value is string {
    return toString(value) === '[object String]'
}

export function isBoolean(value: any): value is boolean {
    return toString(value) === '[object Boolean]'
}

export function isNumber(value: any): value is number {
    return toString(value) === '[object Number]'
}

export function isSymbol(value: any): value is symbol {
    return toString(value) === '[object Symbol]'
}

export function isBigint(value: any): value is bigint {
    return toString(value) === '[object Bigint]'
}
