/*
  二叉树展开为链表

  给你二叉树的根结点 root ，请你将它展开为一个单链表：

  展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
  展开后的单链表应该与二叉树 先序遍历 顺序相同。

  输入：root = [1,2,5,3,4,null,6]
  输出：[1,null,2,null,3,null,4,null,5,null,6]

  输入：root = []
  输出：[]

  输入：root = [0]
  输出：[0]
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  while (root !== null) {
    if (root.left === null) {
      root = root.right
    } else {
      let pre = root.left
      while (pre.right !== null) {
        pre = pre.right
      }
      pre.right = root.right
      root.right = root.left
      root.left = null
      root = root.right
    }
  }
};