class Solution(object):
    def replaceElements(self, arr):
        """
        :type arr: List[int]
        :rtype: List[int]
        """
        rightMax = -1
        
        for i in range(len(arr) - 1, -1, -1):
            newMax = max(rightMax, arr[i])
            arr[i] = rightMax
            rightMax = newMax
            
        return arr