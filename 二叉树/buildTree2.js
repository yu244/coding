/*
  从中序与后序遍历序列构造二叉树

  给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。

  输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
  输出：[3,9,20,null,null,15,7]

  输入：inorder = [-1], postorder = [-1]
  输出：[-1]
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  const n = inorder.length
  const indexMap = new Map()
  for (let i = 0; i < n; i++) {
    indexMap.set(inorder[i], i)
  }

  function helper (p_start, p_end, i_start, i_end) {
    if (p_start > p_end) return null
    let rootVal = postorder[p_end]
    let root = new TreeNode(rootVal)
    let mid = indexMap.get(rootVal)
    let rightNum = i_end - mid
    root.right = helper(p_end - rightNum, p_end - 1, mid + 1, mid + rightNum)
    root.left = helper(p_start, p_end - rightNum - 1, i_start, mid - 1)
    return root
  }

  return helper(0, n - 1, 0, n - 1)
};

const inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
console.log('buildTree(inorder, postorder)', buildTree(inorder, postorder))