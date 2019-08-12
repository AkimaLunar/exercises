const { getMax, getMaxRecursive, getMaxFunctional } = require('./index')
const largeArray = require('./largeArray')

const approaches = [getMax, getMaxFunctional, getMaxRecursive]

approaches.forEach((approach) => {
  console.time(approach.name)
  approach(largeArray)
  console.timeEnd(approach.name)
})
