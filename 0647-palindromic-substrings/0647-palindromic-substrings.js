/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function(s) {
    const n = s.length
    let result = 0
    
    for (let i = 0; i < n; i++) {
        let leftOdd = i
        let rightOdd = i
        result += countPali(s, leftOdd, rightOdd)
        
        let leftEven = i
        let rightEven = i + 1
        result += countPali(s, leftEven, rightEven)
    }
    return result
};


const countPali = function(s, left, right) {
    const n = s.length
    let result = 0
    while (
        left >= 0 &&
        right < n &&
        s[left] === s[right]
    ) {
        left--
        right++
        result++
    }
    return result
}
