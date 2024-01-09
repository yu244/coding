/*
  二叉树的右视图

  给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

  输入: [1,2,3,null,5,null,4]
  输出: [1,3,4]

  输入: [1,null,3]
  输出: [1,3]

  输入: []
  输出: []
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
// 栈模拟递归
var rightSideView = function(root) {
  const arr = new Array()
  const stack = new Array()
  let maxDepth = 0
  let cur = root
  let pre = null
  while (cur !== null || stack.length > 0) {
    while (cur !== null) {
      stack.push(cur)
      if (stack.length > maxDepth) {
        arr.push(cur.val)
        maxDepth++
      }
      cur = cur.right
    }
    cur = stack[stack.length - 1]
    if (cur.left === null || cur.left === pre) {
      stack.pop()
      pre = cur
      cur = null
    } else {
      cur = cur.left
    }
  }
  return arr
};
// 递归
var rightSideView = function(root) {
  let arr = new Array()
  let maxDepth = 0
  function dfs (node, depth) {
    if (node === null) return
    if (maxDepth < depth) {
      arr.push(node.val)
      maxDepth = depth
    }
    dfs(node.right, depth+1)
    dfs(node.left, depth+1)
  }
  dfs(root, 1)
  return arr
}
// 层序遍历
var rightSideView = function(root) {
  const arr = new Array()
  const queue = new Array()
  if (root !== null) {
    queue.push(root)
  }
  while (queue.length > 0) {
    const len = queue.length
    arr.push(queue[len - 1].val)
    for (let i = 0; i < len; i++) {
      const cur = queue.shift()      
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
    }
  }
  return arr
}