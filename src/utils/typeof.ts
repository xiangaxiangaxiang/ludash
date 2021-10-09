import { getType } from './get-type'

function toString(value: any): string {
    return Object.prototype.toString.call(value)
}

// 是否空数组
export function isEmptyObject(value: any): boolean {
    if (!isPlainObject(value)) {
        return false
    }
    return !Object.keys(value).length
}

// 是否对象（包括数组等）
export function isObjectLike(value: any) {
    return !isNull(value) && typeof value === 'object'
}

// 是否纯对象，不包含数组等
export function isPlainObject(value: any) {
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

// 是否数组，直接使用Array对象的isArray
export const isArray = Array.isArray

// 是否错误对象
export function isError(value: any): value is Error {
    if (!isObjectLike(value)) {
        return false
    }
    const type = getType(value)
    return (
        type == 'error' ||
        type == 'domexception' ||
        (typeof value.message === 'string' &&
            typeof value.name === 'string' &&
            !isPlainObject(value))
    )
}

// 是否函数
export function isFunction(value: any): value is Function {
    return getType(value) === 'function'
}

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
