/*
  二叉树的锯齿形层序遍历
  给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。
  （即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

  输入：root = [3,9,20,null,null,15,7]
  输出：[[3],[20,9],[15,7]]

  输入：root = [1]
  输出：[[1]]

  输入：root = []
  输出：[]
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  const res = new Array()
  const queue = new Array()
  let leftSide = false
  if (root !== null) {
    queue.push(root)
  }
  while (queue.length > 0) {
    const len = queue.length
    leftSide = !leftSide
    const arr = new Array()
    for (let i = 0; i < len; i++) {
      const cur = queue.shift()
      arr.push(cur.val)
      if (cur.left !== null) {
        queue.push(cur.left)
      }
      if (cur.right !== null) {
        queue.push(cur.right)
      }
    }
    if (leftSide) {
      res.push(arr)
    } else {
      res.push(arr.reverse())
    }
  }
  return res
};