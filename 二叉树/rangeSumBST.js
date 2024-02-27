/*
  938. 二叉搜索树的范围和
  给定二叉搜索树的根结点 root，返回值位于范围 [low, high] 之间的所有结点的值的和。

  输入：root = [10,5,15,3,7,null,18], low = 7, high = 15
  输出：32

  输入：root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
  输出：23
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// bfs
var rangeSumBST = function(root, low, high) {
  const queue = new Array()
  queue.push(root)
  let sum = 0
  while (queue.length > 0) {
    const n = queue.length
    for (let i = 0; i < n; i++) {
      const node = queue.shift()
      if (node.val <= high && node.val >= low) {
        sum += node.val
      }
      if (node.left !== null) {
        queue.push(node.left)
      }
      if (node.right !== null) {
        queue.push(node.right)
      }
    }
  }
  return sum
};

// dfs
var rangeSumBST = function(root, low, high) {
  function dfs(node) {
    if (node === null) return 0
    let total = 0
    if (node.val >= low && node.val <= high) {
      total = node.val
    }
    return total + dfs(node.left) + dfs(node.right)
  }
  return dfs(root)
}

// dfs
var rangeSumBST = function(root, low, high) {
  let sum = 0
  function dfs(node) {
    if (node === null) return
    if (node.val >= low && node.val <= high) {
      sum += node.val
    }
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  return sum
}