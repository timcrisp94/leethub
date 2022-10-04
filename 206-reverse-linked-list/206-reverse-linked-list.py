# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def reverseList(self, head):
        return self.helper(head, None)
    
    def helper(self, head, node):
        if not head:
            return node
        tmp = head.next
        head.next = node
        return self.helper(tmp, head)