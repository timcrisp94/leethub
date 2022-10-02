/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
  const n = nums.length
  if (n === 1) return nums[0]

  let negative = 1
  let prefix = 1
  let max = 0

  for (let i = 0; i < n; i++) {
    prefix *= nums[i]
    max = Math.max(prefix, max)

    if (prefix < 0) {
      max = Math.max(prefix/negative, max)
      negative = negative == 1 ? prefix : negative
    } else if (prefix == 0) {
      prefix = 1
      negative = 1
    }
  }
  return max
}