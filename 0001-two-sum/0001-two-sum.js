/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const n = nums.length
    const map = {}
    
    for (let i = 0; i < n; i++) {
        let cur = nums[i]
        let diff = target - cur
    
        if (diff in map) {
        return [map[diff], i]
        }
        map[cur] = i
    }
    return null
};