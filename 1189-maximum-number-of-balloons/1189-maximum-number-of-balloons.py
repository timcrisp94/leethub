class Solution(object):
    def maxNumberOfBalloons(self, text):
        """
        :type text: str
        :rtype: int
        """
        letters = ['b', 'a', 'l', 'o', 'n']
        counts = [0] * 5
        
        for i in range(5):
            counts[i] = text.count(letters[i])

        
        for i in range(2,4):
            counts[i] = counts[i] // 2
            
        return min(counts)
            