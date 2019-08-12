const { getMax, getMaxRecursive, getMaxFunctional } = require('./index')
const largeArray = require('./largeArray')

const testArrays = [
  [1, 2, 34, 5, 6],
  [-12, -24, 34, 57, 6]
]

describe('getMax', () => {
  testArrays.forEach((array) => {
    const max = Math.max(...array)
    it(`returns ${max} for [${array}]`, () => {
      expect(getMax(array)).toBe(max)
    })
  })
  it(`returns 122 for the largeArray`, () => {
    expect(getMax(largeArray)).toBe(122)
  })
})

describe('getMaxRecursive', () => {
  testArrays.forEach((array) => {
    const max = Math.max(...array)
    it(`returns ${max} for [${array}]`, () => {
      expect(getMaxRecursive(array)).toBe(max)
    })
  })
  // it(`returns 122 for the largeArray`, () => {
  //   expect(getMaxRecursive(largeArray)).toBe(122)
  // })
})

describe('getMaxFunctional', () => {
  testArrays.forEach((array) => {
    const max = Math.max(...array)
    it(`returns ${max} for [${array}]`, () => {
      expect(getMaxFunctional(array)).toBe(max)
    })
  })
  it(`returns 122 for the largeArray`, () => {
    expect(getMaxFunctional(largeArray)).toBe(122)
  })
})
