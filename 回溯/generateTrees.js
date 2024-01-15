/*
  不同的二叉搜索树 II
  给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。

  输入：n = 3
  输出：[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]

  输入：n = 1
  输出：[[1]]
  
  提示：
  1 <= n <= 8
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  function getAllBSTs (start, end) {
    // 递归出口，起始值大于结束值，当前二叉搜索树为空，返回空节点
    if (start > end) return [null]
    // 创建空数组存储所有可能的BST
    const res = []
    // 遍历从 start 到 end 所有可能的根节点的值
    for (let i = start; i <= end; i++) {
      // 递归获取左子树所有可能的BST
      const leftBSTs = getAllBSTs(start, i - 1)
      // 递归获取右子树所有可能的BST
      const rightBSTs = getAllBSTs(i + 1, end)
      // 选择一个左子树组合右子树连接根节点
      for (const leftTree of leftBSTs) {
        for (const rightTree of rightBSTs) {
          const root = new TreeNode(i)
          root.left = leftTree
          root.right = rightTree
          res.push(root)
        }
      }
    }
    return res
  }
  return getAllBSTs(1, n)
};
