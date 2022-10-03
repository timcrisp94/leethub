class Solution(object):
    def maxProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        res = nums[0]
        curMin, curMax = 1, 1

        for n in nums:
          temp = curMax * n
          curMax = max(n * curMax, n * curMin, n)
          curMin = min(temp, n * curMin, n)
          res = max(res, curMax)
        return res