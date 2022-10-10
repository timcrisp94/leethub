/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  const n = nums.length
  let left = 0
  let right = n - 1
  let result = nums[0]

  while (left < right) {    
    const mid = (left + right) >> 1
    const guess = nums[mid]
    const [leftNum, rightNum] = [nums[left], nums[right]]

    const isTarget = leftNum < rightNum
    if (isTarget) return leftNum
    
    const greater = leftNum <= guess
    if (greater) left = mid + 1

    const less = guess < leftNum
    if (less) right = mid
  }
  return nums[left]
    
};