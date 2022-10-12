/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const n = s.length
    const map = new Map()
    let left = 0
    let longest = 0
    
    for (let right = 0; right < n; right++) {
        let curChar = s[right]
        let curCharPos = map.get(curChar)
        
        while (curCharPos >= left) {
            left = curCharPos + 1
        }
        map.set(curChar, right)
        longest = Math.max(longest, right - left + 1)
    }
    return longest
};