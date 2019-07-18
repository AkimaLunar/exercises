const {getMax, getMaxFunctional, getMaxRecursive} = require('./index')
const largeArray = require('./largeArray')

const approaches = [getMax, getMaxFunctional, getMaxRecursive]

approaches.forEach((approach) => {
    describe(approach.name, () => {
        it('returns 5 for [1,2,3,4,5]', () => {
            expect(approach([1,2,3,4,5])).toBe(5)
        })
        it('returns 123 for [33,44,88,22,33,123]', () => {
            expect(approach([33,44,88,22,33,123])).toBe(123)
        })
        it('returns 21 for [-1,-222,21,4,5]', () => {
            expect(approach([-1,-222,21,4,5])).toBe(21)
        })
        it('returns 122 for largeArray', () => {
            expect(approach(largeArray)).toBe(122)
        })
    })
})
