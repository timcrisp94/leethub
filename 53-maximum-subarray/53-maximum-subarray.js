/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const n = nums.length
    
    for (let i = 1; i < n; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
    }
    return Math.max(...nums)
};

// nums = [integers]
// if max is neg int
// FOR num in nums
// reduce function 
// if > curr
// if > max

// 