/*
  二叉树的层序遍历
  给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

  输入：root = [3,9,20,null,null,15,7]
  输出：[[3],[9,20],[15,7]]

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
var levelOrder = function(root) {
  const res = new Array()
  const queue = new Array()
  if (root !== null) {
    queue.push(root)
  }
  while (queue.length > 0) {
    const len = queue.length
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
    res.push(arr)
  }
  return res
};