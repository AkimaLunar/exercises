const { filter, recursiveFilter } = require('./index')

describe('Iterative', () => {
    it('filter an array', () => {
        const comp = (el) => el > 0
        const arr = [1, 2, -1, -2]
        expect(recursiveFilter(arr, comp)[0]).toBe(1)
        expect(recursiveFilter(arr, comp)[1]).toBe(2)
    })
})

describe('Recursive', () => {
    it('filter an array', () => {
        const comp = (el) => el > 0
        const arr = [1, 2, -1, -2]
        expect(recursiveFilter(arr, comp)[0]).toBe(1)
        expect(recursiveFilter(arr, comp)[1]).toBe(2)
    })
})
