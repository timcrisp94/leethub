/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length
    if (n < 1) return null
    if (n === 1) return nums[0]
    
    let rob1 = 0
    let rob2 = 0 
    
    for (let num of nums) {
        let temp = Math.max(rob1 + num, rob2)
        rob1 = rob2
        rob2 = temp        
    }
    return rob2
};

