/*
  二叉树的层平均值
  给定一个非空二叉树的根节点 root , 以数组的形式返回每一层节点的平均值。与实际答案相差 10-5 以内的答案可以被接受。
  
  输入：root = [3,9,20,null,null,15,7]
  输出：[3.00000,14.50000,11.00000]
  解释：第 0 层的平均值为 3,第 1 层的平均值为 14.5,第 2 层的平均值为 11 。
  因此返回 [3, 14.5, 11] 。

  输入：root = [3,9,20,15,7]
  输出：[3.00000,14.50000,11.00000]
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  const res = new Array()
  const queue = new Array()
  if (root !== null) {
    queue.push(root)
  }
  while (queue.length > 0) {
    let sum = 0
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const cur = queue.shift()
      sum += cur.val
      if (cur.left !== null) {
        queue.push(cur.left)
      }
      if (cur.right !== null) {
        queue.push(cur.right)
      }
    }
    res.push(sum / len)
  }
  return res
};