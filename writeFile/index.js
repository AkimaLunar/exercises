const fs = require('fs')
console.log('Firing up the machine…')

const createLargeArray = (length = 2000000) => (
    Array.from(Array(length)).map(() => Math.random() * 10)
)

const file = `
    module.exports = [${createLargeArray()}]
`
const writeFile = new Promise((resolve, reject) => {
    fs.writeFile('creatingArraysAndStuff.js', file, (error) => {
        if(error) { reject(error) }
        resolve('Created a large array!')
    })
})

writeFile
    .then((response) => console.log(response))
    .catch((error) => console.log(error))

console.log('Where would I appear?…')

