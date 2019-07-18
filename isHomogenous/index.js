// isHomogenous
// =============================================================================

/**
 * @param {any} element - Element to evaluate.
 * @returns {string} - Type of the element.
 *   'string'
 *   'number'
 *   'array'
 *   'object'
 *   'undefined'
 *   'NaN'
 *   'null'
 *   'infinity'
 */
const getType = (element) => {
    if (typeof element === 'number' && isNaN(element)) return 'NaN'
    if (typeof element === 'number' && !isFinite(element)) return 'infinity'
    const regex = /^\[object (\S+?)\]$/
    const matches = Object.prototype.toString.call(element).match(regex) || []
    return matches[1].toLowerCase() || 'undefined'
}

/**
 * Evaluates whether all elements of the array are the same type.
 * For-loop approach.
 * @param {array} array - Array to evaluate.
 * @returns {boolean}
 */
const isHomogenous = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        if (getType(array[i]) !== getType(array[i+1])) {
            return false
        }
    }
    return true
}

/**
 * Evaluates whether all elements of the array are the same type.
 * Recursive approach.
 * @param {array} array - Array to evaluate.
 * @returns {boolean}
 */
const isHomogenousRecursive = ([head, ...tail]) => {
    if (tail.length === 0) return true
    if (getType(head) !== getType(tail[0])) return false
    return isHomogenousRecursive(tail)
}

module.exports = {isHomogenous, isHomogenousRecursive}