/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const n = s.length
    for (let [a, b] = [0, n - 1]; a < b; a++, b--) {
        [s[a], s[b]] = [s[b], s[a]]
    }
    
};