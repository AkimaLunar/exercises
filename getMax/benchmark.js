const {getMax, getMaxFunctional, getMaxRecursive} = require('./index')
const largeArray = require('./largeArray')

const approaches = [getMaxRecursive, getMax, getMaxFunctional]

approaches.forEach((approach) => {
    const APPROACH = approach.name
    console.time(APPROACH)
    approach(largeArray)
    console.timeEnd(APPROACH)
})