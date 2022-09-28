/**
 * @param {number[]} nums
 * @return {number}
 */

function maxSubArray(nums) {
    let maxSum = Number.MIN_SAFE_INTEGER
    let sum = 0
    
    for (let i = 0; i < nums.length; i++) {
        sum = Math.max(sum + nums[i], nums[i])
        maxSum = Math.max(sum, maxSum)
    }
    return maxSum
}