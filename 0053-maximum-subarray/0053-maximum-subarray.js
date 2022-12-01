/**
 * @param {number[]} nums
 * @return {number}
 */

function maxSubArray(nums) {
    const n = nums.length
    let maxSum = -Infinity
    let sum = 0
    
    for (let i = 0; i < n; i++) {
        sum = Math.max(nums[i], sum + nums[i])
        maxSum = Math.max(sum, maxSum)
    }
    return maxSum
}

// -2 1 -3

// sum 