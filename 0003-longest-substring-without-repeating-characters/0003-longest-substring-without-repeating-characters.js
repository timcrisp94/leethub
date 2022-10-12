/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  const n = s.length
  let maxLen = 0
  let maxStr = ''

  for (let i = 0; i < n; i++) {
    let temp = s[i]
    let posIndex = maxStr.indexOf(temp)
    
    if (posIndex > -1) {
      maxStr = maxStr.substring(posIndex + 1)
    }

    maxStr += temp
    maxLen = Math.max(maxLen, maxStr.length)
  }
  return maxLen
}