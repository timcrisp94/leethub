/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const n = nums.length
    let sum = 0
    let left = 0
    let right = n-1
    
    while (left < right) {
        sum = nums[left] + nums[right]
        
        if (sum === target) {
            return [left + 1, right + 1]
        } else if (sum > target) {
            right--
        } else if (sum < target) {
            left++
        }        
    }        
};