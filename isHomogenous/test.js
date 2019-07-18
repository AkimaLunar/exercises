const {isHomogenous, isHomogenousRecursive} = require('./index')

const testArraysTrue = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [null, null, null]
]

const testArraysFalse = [
    [[2], 'Xavier'],
    [[2], {colour: 'blue'}],
    [1, '2', 3],
    [1, null, Infinity, undefined]
]

describe('isHomogenous', () => {
    testArraysTrue.forEach((array) => {
        it(`returns true for ${array}`, () => {
            expect(isHomogenous(array)).toBe(true)
        })
    })
    testArraysFalse.forEach((array) => {
        it(`returns false for ${array}`, () => {
            expect(isHomogenous(array)).toBe(false)
        })
    })
})

describe('isHomogenousRecursive', () => {
    testArraysTrue.forEach((array) => {
        it(`returns true for ${array}`, () => {
            expect(isHomogenousRecursive(array)).toBe(true)
        })
    })
    testArraysFalse.forEach((array) => {
        it(`returns false for ${array}`, () => {
            expect(isHomogenousRecursive(array)).toBe(false)
        })
    })
})