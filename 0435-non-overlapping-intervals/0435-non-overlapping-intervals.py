class Solution(object):
    def eraseOverlapIntervals(self, intervals):
        """
        :type intervals: List[List[int]]
        :rtype: int
        """
        intervals.sort()
        res = 0
        prev = intervals[0][1]
        
        for start, end in intervals[1:]:
            if start >= prev:
                prev = end
            else:
                res += 1
                prev = min(end, prev)
        return res