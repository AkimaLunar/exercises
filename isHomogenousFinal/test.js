const { isHomogenous, isHomogenousRecursive } = require('./index')

const testTrueCases = [['ABC', 'DEF'], [1, 2, 3], [[4, 4, 4], [4, 4, 5]]]

const testFalseCases = [['ABC', 1], [1, NaN, Infinity], [[1, 2, 3], { a: 'b' }]]

describe('isHomogenous', () => {
  testTrueCases.forEach(array => {
    it(`returns true for [${array}]`, () => {
      expect(isHomogenous(array)).toBe(true)
    })
  })
  testFalseCases.forEach(array => {
    it(`returns false for [${array}]`, () => {
      expect(isHomogenous(array)).toBe(false)
    })
  })
})

describe('isHomogenousRecursive', () => {
  testTrueCases.forEach(array => {
    it(`returns true for [${array}]`, () => {
      expect(isHomogenousRecursive(array)).toBe(true)
    })
  })
  testFalseCases.forEach(array => {
    it(`returns false for [${array}]`, () => {
      expect(isHomogenousRecursive(array)).toBe(false)
    })
  })
})
