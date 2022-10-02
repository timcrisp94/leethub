/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
  let result = nums[0]
  let currentMax = 1
  let currentMin = 1

  for (let num of nums) {
    if (num > result) result = num
    if (num === 0) {
      currentMax = 1
      currentMin = 1
    }
    let temp = currentMax * num
    currentMax = Math.max(temp, num * currentMin, num)
    currentMin = Math.min(temp, num * currentMin, num)
    result = Math.max(result, currentMax) 
  }
  return result
}