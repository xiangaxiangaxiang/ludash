import {
    isArray,
    isBigint,
    isBoolean,
    isEmptyObject,
    isError,
    isFunction,
    isNull,
    isNumber,
    isObjectLike,
    isPlainObject,
    isString,
    isSymbol,
    isUndefined,
} from '../typeof'

describe('typeof', function () {
    const functions = [
        isEmptyObject,
        isError,
        isNull,
        isObjectLike,
        isPlainObject,
        isUndefined,
        isString,
        isNumber,
        isArray,
        isBoolean,
        isSymbol,
        isBigint,
        isFunction,
    ]
    const map = new Map()
    map.set('str', '')
    map.set('num', 1)
    map.set('bool', false)
    map.set('bigint', 1000000000000000000000000000000n)
    map.set('symbol', Symbol('lalala'))
    map.set('aNull', null)
    map.set('aUndefined', undefined)
    map.set('emptyObject', {})
    map.set('plainObject', { a: 1 })
    map.set('arr', [])
    map.set('error', new Error('are you ok ?'))
    map.set('typeError', new TypeError('im very ok'))
    map.set('func', () => 666)
    map.set('arrayLike', arguments)
    map.set('map', new Map())
    map.set('set', new Set())
    map.set('weakMap', new WeakMap())
    map.set('weakSet', new WeakSet())
    map.set('nan', NaN)
    map.set('date', new Date())
    map.set('reg', /\d/g)
    map.set('finite', 1 / 1)
    map.set('unlimited', 1 / 0)
})
