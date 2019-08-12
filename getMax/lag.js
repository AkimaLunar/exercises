// Generates an array of a specified size.

const fs = require('fs')

const createLargeArray = (length = 200) => (
  Array.from(Array(length)).map(() => Math.random() * 10)
)
const string = `module.exports = [${[...createLargeArray(100), 122]}]`

fs.writeFile('largeArray.js', string, (error => {
  if (error) throw error
  console.log('Created a large array!')
}))
