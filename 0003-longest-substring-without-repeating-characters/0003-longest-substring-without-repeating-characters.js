/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  const n = s.length
  let maxLen = 0
  let maxStr = ''
  let temp, posIndex, i

  for (i = 0; i < n; i++) {
    temp = s[i]
    posIndex = maxStr.indexOf(temp)
    
    if (posIndex > -1) {
      maxStr = maxStr.substring(posIndex + 1)
    }

    maxStr += temp
    maxLen = Math.max(maxLen, maxStr.length)
  }
  return maxLen
}