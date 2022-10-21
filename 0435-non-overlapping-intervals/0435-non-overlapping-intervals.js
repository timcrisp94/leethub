/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    const n = intervals.length
    intervals.sort((a, b) => a[1] - b[1])
    let result = 0
    let left = intervals[0]
    
    for (let i = 1; i < n; i++) {
        let right = intervals[i]
        if (right[0] < left[1]) {
            result += 1
        } else {
            left = right
        }
    }
    return result
};