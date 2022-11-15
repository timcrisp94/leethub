/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    const n = arr.length
    const result = new Array(n)
    result[n - 1] = -1
    
    for (let i = n - 1; i > 0; i--) {
        result[i - 1] = Math.max(arr[i], result[i])
    }
    
    return result
};