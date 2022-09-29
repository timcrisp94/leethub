class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        maxSub = nums[0]
        cur = 0
        
        for n in nums:
            if cur < 0:
                cur = 0
            cur += n
            maxSub = max(maxSub, cur)
        return maxSub