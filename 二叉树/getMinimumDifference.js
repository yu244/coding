/*
  二叉搜索树的最小绝对差
  给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。

  差值是一个正数，其数值等于两值之差的绝对值。

  输入：root = [4,2,6,1,3]
  输出：1

  输入：root = [1,0,48,null,null,12,49]
  输出：1
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
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let min = Infinity
  let pre = null
  function dfs (root) {
    if (root === null) return
    dfs(root.left)
    if (pre !== null) {
      min = Math.min((root.val - pre.val), min)
    }
    pre = root
    dfs(root.right)
  }
  dfs(root)
  return min
};