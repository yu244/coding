/*
  对称二叉树

  给你一个二叉树的根节点 root ， 检查它是否轴对称。

  输入：root = [1,2,2,3,4,4,3]
  输出：true

  输入：root = [1,2,2,null,3,null,3]
  输出：false
*/
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
var isSymmetric = function(root) {
  if (root === null) return true
  if (root.left === null && root.right === null) return true
  if ((root.left === null && root.right !== null) || (root.right === null && root.left !== null)) return false
  let res = true
  helper(root.left, root.right)
  function helper (p, q) {
    if ((p !== null && q === null) || (p === null && q !== null)) {
      res = false
      return
    }
    if (p !== null && q !== null) {
      if (p.val !== q.val) {
        res = false
        return
      }
      helper(p.left, q.right)
      helper(p.right, q.left)
    }
  }
  return res
};