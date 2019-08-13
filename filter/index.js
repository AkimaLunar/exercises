
/**
 * Filter. Iterative Approach.
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Array}
 */
function filter(arr, fn) {
  const result = [];
  arr.forEach((el) => {
    if (fn(el)) { result.push(el) };
  });
  return result;
}

// 5gt
/** Filter. Recursive approach.
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Array}
 */
const recursiveFilter = ([first, ...rest], fn) => first === undefined
  ? []
  : fn(first)
    ? [first, ...recursiveFilter(rest, fn)]
    : [...recursiveFilter(rest, fn)];

module.exports = { filter, recursiveFilter }
