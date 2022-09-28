/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const n = intervals.length
    intervals.sort((a,b) => a[0] - b[0])
    let result = [intervals[0]]
    
    for (let i = 1; i < n; i++) {
        let lastEnd = result.at(-1)[1]
        let start = intervals[i][0]
        
        if (start <= lastEnd) {
            result.at(-1)[1] = Math.max(lastEnd, intervals[i][1])
        } else {
            result.push(intervals[i])
        }
    }
    
    return result
    
};