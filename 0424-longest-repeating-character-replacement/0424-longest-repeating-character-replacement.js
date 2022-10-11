/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const n = s.length 
    const hash = {}
    let left = 0
    let right = 0
    let maxCharCount = 0
    
    while (right < n) {
        hash[s[right]] = (hash[s[right]] || 0) + 1
        maxCharCount = Math.max(maxCharCount, hash[s[right]])
        
        if (right - left + 1 - maxCharCount > k) {
            hash[s[left]]--
            left += 1
        }
        right += 1
    }
    return right - left
    
};