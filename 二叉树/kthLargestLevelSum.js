/*
  2583. 二叉树中的第 K 大层和

  给你一棵二叉树的根节点 root 和一个正整数 k 。
  树中的 层和 是指 同一层 上节点值的总和。
  返回树中第 k 大的层和（不一定不同）。如果树少于 k 层，则返回 -1 。

  注意，如果两个节点与根节点的距离相同，则认为它们在同一层。

  输入：root = [5,8,9,2,1,3,7,4,6], k = 2
  输出：13
  解释：树中每一层的层和分别是：
  - Level 1: 5
  - Level 2: 8 + 9 = 17
  - Level 3: 2 + 1 + 3 + 7 = 13
  - Level 4: 4 + 6 = 10
  第 2 大的层和等于 13 。

  输入：root = [1,2,null,3], k = 1
  输出：3
  解释：最大的层和是 3 。
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
 * @param {number} k
 * @return {number}
 */
// 一眼广度优先+排序
var kthLargestLevelSum = function(root, k) {
  const queue = new Array()
  queue.push(root)
  const sumList = new Array()
  while (queue.length > 0) {
    const n = queue.length
    let sum = 0
    for (let i = 0; i < n; i++) {
      const node = queue.shift()
      sum += node.val
      if (node.left !== null) {
        queue.push(node.left)
      }
      if (node.right !== null) {
        queue.push(node.right)
      }
    }
    sumList.push(sum)
  }
  if (k > sumList.length) return -1
  sumList.sort((a, b) => a - b)
  return sumList[k]
};