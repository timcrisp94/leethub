/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const n = s.length
    reverse(0, n - 1)
    
    function reverse(i, j) {
        if (i >= j) return
        [s[i], s[j]] = [s[j], s[i]]
        reverse(i + 1, j - 1)
    }
    
};