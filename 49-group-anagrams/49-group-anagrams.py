class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        result = defaultdict(list)

        for str in strs:
            s = ''.join(sorted(str))
            result[s].append(str)
            
        return result.values()
        