/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const n = height.length
    let left = 0
    let right = n - 1
    let maxA = 0
    
    while (left < right) {
        let width = right - left
        let minH = Math.min(height[left], height[right])
        maxA = Math.max(minH * width, maxA)
        if (height[left] > height[right]) right -= 1
        else left += 1
    }
    return maxA
};