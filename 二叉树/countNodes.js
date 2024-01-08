/*
  完全二叉树的节点个数

  给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。

  完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，
  并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2h 个节点。

  输入：root = [1,2,3,4,5,6]
  输出：6

  输入：root = []
  输出：0

  输入：root = [1]
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
var countNodes = function(root) {
  let num = 0
  function dfs (node) {
    if (node === null) return
    num++
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  return num
};