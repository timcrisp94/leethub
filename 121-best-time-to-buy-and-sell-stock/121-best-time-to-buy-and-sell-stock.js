/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length
    let cur = 0
    let max = 0
    
    for (let i = 1; i < n; i++) {
        cur = Math.max(0, cur += prices[i] - prices[i-1])
        max = Math.max(cur, max)
    }
    return max
    
};