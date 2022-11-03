/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
//     jewels = types of stones that are jewels
//     stones = stones you have
    // stones[char] = type of stone
    const map = {}
    let count = 0
    
    for (let char of jewels){
        map[char] = (map[char] || 0) + 1
    }
    
    for (let char of stones) {
        if (map[char]) {
            count += 1
        }
    }
    return count
    
};