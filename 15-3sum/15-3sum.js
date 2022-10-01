/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  const n = nums.length
  nums.sort((a, b) => a - b)

  const result = []

  for (let i = 0; i < n; i++) {
    if (nums[i] === nums[i - 1]) continue
    let left = i + 1
    let right = n - 1

    while (left < right) {
      let threeSum = nums[i] + nums[left] + nums[right]
      if (threeSum > 0) {
        right -= 1
      } else if (threeSum < 0) {
        left += 1
      } else {
        result.push([nums[i], nums[left], nums[right]])
        left += 1
        while (nums[left] === nums[left - 1] && left < right) {
          left += 1
        }
      }
    }
  }
  return result
}