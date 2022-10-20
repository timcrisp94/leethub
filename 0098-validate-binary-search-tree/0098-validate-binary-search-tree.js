/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (!root) return true
    return validate(root, null, null)
};

function validate(node, min, max) {
    if (min !== null && node.val <= min) return false
    if (max !== null && node.val >= max) return false
    
    if (node.left && !validate(node.left, min, node.val)) return false
    if (node.right && !validate(node.right, node.val, max)) return false
    return true
}