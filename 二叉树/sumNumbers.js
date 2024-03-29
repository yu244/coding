/*
  求根节点到叶节点数字之和

  给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
  每条从根节点到叶节点的路径都代表一个数字：

  例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
  计算从根节点到叶节点生成的 所有数字之和 。

  叶节点 是指没有子节点的节点。

  输入：root = [1,2,3]
  输出：25
  解释：
  从根到叶子节点路径 1->2 代表数字 12
  从根到叶子节点路径 1->3 代表数字 13
  因此，数字总和 = 12 + 13 = 25

  输入：root = [4,9,0,5,1]
  输出：1026
  解释：
  从根到叶子节点路径 4->9->5 代表数字 495
  从根到叶子节点路径 4->9->1 代表数字 491
  从根到叶子节点路径 4->0 代表数字 40
  因此，数字总和 = 495 + 491 + 40 = 1026
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
// 栈
var sumNumbers = function(root) {
  const stack = new Array()
  let sum = 0
  let num = 0
  let cur = root
  let pre = null
  while (cur !== null || stack.length > 0) {
    while (cur !== null) {
      stack.push(cur)
      num = (num * 10) + cur.val
      cur = cur.left
    }
    cur = stack[stack.length - 1]
    if (cur.left === null && cur.right === null) {
      sum += num
    }
    if (cur.right === null || cur.right === pre) {
      stack.pop()
      num = (num - cur.val) / 10
      pre = cur
      cur = null
    } else {
      cur = cur.right
    }
  }
  return sum
};

// 递归
var sumNumbers = function(root) {
  function dfs (node, prevNum) {
    if (node === null) {
      return 0
    }
    let sum = prevNum * 10 + node.val
    if (node.left === null && node.right === null) {
      return sum
    } else {
      return dfs(node.left, sum) + dfs(node.right, sum)
    }
  }

  return dfs(root, 0)
}

