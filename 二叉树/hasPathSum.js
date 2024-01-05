/*
  路径总和

  给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。
  判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
  如果存在，返回 true ；否则，返回 false 。

  叶子节点 是指没有子节点的节点。

  输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
  输出：true

  输入：root = [1,2,3], targetSum = 5
  输出：false
  解释：树中存在两条根节点到叶子节点的路径：
  (1 --> 2): 和为 3
  (1 --> 3): 和为 4
  不存在 sum = 5 的根节点到叶子节点的路径。

  输入：root = [], targetSum = 0
  输出：false
  解释：由于树是空的，所以不存在根节点到叶子节点的路径。
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
 * @param {number} targetSum
 * @return {boolean}
 */
// 112. 路径总和
var hasPathSum = function(root, targetSum) {
  const stack = new Array()
  let cur = root
  let num = 0
  let pre = null
  while (cur !== null || stack.length > 0) {
    while (cur !== null) {
      stack.push(cur)
      num += cur.val
      cur = cur.left
    }
    cur = stack[stack.length - 1]
    if (num === targetSum && cur.right === null && cur.left === null) return true
    if (cur.right === null || cur.right === pre) {
      stack.pop()
      num -= cur.val
      pre = cur
      cur = null
    } else {
      cur = cur.right
    }
  }
  return false
};
// 递归解法
var hasPathSum = function(root, targetSum) {
  if (root === null) {
    return false
  }
  if (root.left === null && root.right === null) {
    return targetSum === root.val
  }
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
}
