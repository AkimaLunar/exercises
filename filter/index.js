/**
 * Filter
 * @param array arr
 * @param function fn
 * @returns Array
 */

function filter(arr, fn) {
  const [current, ...rest] = arr
  const filtered = []
  // (1) Base case: if there are no items left in the array
  // break and return filtered.
  if (arr.length === 0) {
    return filtered
  }
  // (2) Check, does the first element in the array pass the filter
  // function
  // (2.1) If yes, add to filtered
  if (fn(current)) { filtered.push(current) }

  // (3) Call filtered with the next item
  filter(rest, fn)
}

const even = (element) => element % 2 === 0
const array = [1, 2, 3, 4, 5, 6]

console.log(filter(array, even))
