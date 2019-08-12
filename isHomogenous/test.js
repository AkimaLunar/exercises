const { isHomogenous, isHomogenousRecursive } = require('./index')

describe('isHomogenous', () => {
  test.each`
    array                      | expected
    ${['ABC', 'DEF']}          | ${true}
    ${[1, 2, 3]}               | ${true}
    ${[[4, 4, 4], [4, 4, 5]]}  | ${true}
    ${['ABC', 1]}              | ${false}
    ${[1, NaN, Infinity]}      | ${false}
    ${[[1, 2, 3], { a: 'b' }]} | ${false}
  `('returns $expected for $array', ({ array, expected }) => {
    expect(isHomogenous(array)).toBe(expected)
  })
})

describe('isHomogenousRecursive', () => {
  test.each`
    array                      | expected
    ${['ABC', 'DEF']}          | ${true}
    ${[1, 2, 3]}               | ${true}
    ${[[4, 4, 4], [4, 4, 5]]}  | ${true}
    ${['ABC', 1]}              | ${false}
    ${[1, NaN, Infinity]}      | ${false}
    ${[[1, 2, 3], { a: 'b' }]} | ${false}
  `('returns $expected for $array', ({ array, expected }) => {
    expect(isHomogenous(array)).toBe(expected)
  })
})
