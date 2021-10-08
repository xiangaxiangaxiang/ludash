import { getType } from '../get-type'

describe('getType', () => {
    const str = 'string'
    const num = 666
    const bool = true
    const sym = Symbol(666)
    const bigint = 100000000000000000000000000000000000000n
    const arr = [666]
    const obj = {
        a: 111,
    }
    const func = () => 666

    test('should be string', () => {
        expect(getType(str)).toBe('string')
    })

    test('should be number', () => {
        expect(getType(num)).toBe('number')
    })

    test('should be boolean', () => {
        expect(getType(bool)).toBe('boolean')
    })

    test('should be null', () => {
        expect(getType(null)).toBe('null')
    })

    test('should be undefined', () => {
        expect(getType(undefined)).toBe('undefined')
    })

    test('should be array', () => {
        expect(getType(arr)).toBe('array')
    })

    test('should be object', () => {
        expect(getType(obj)).toBe('object')
    })

    test('should be function', () => {
        expect(getType(func)).toBe('function')
    })

    test('should be symbol', () => {
        expect(getType(sym)).toBe('symbol')
    })

    test('should be bigint', () => {
        expect(getType(bigint)).toBe('bigint')
    })
})
