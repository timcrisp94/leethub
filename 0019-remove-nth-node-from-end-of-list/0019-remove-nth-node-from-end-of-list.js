/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(-Infinity)
    dummy.next = head
    let prev = dummy
    let result = dummy
    let left = head
    let right = head
    
    while (n > 0) {
        right = right.next
        n -= 1
    }
    
    while (right) {
        left = left.next
        right = right.next
        prev = prev.next
    }
    
    prev.next = left.next
    return result = result.next
};