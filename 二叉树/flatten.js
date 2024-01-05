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
// 找到左子树的最右节点，将root右子树转接过来，再将root下沉
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
}
// 通过 变形的后序遍历 + 队列 的方式从尾部开始，找到右子树的最右节点开始 合并左子树最右节点
// 先序 DLR、中序 LDR、后序 LRD
var flatten = function(root) {
  const stack = new Array()
  let cur = root
  let pre = null

  while (cur !== null || stack.length !== 0) {
    while (cur !== null) {
      stack.push(cur)
      cur = cur.right
    }
    cur = stack[stack.length - 1]
    // 在不存在左节点或右节点已经访问过的情况下，访问根节点
    if (cur.left === null || cur.left === pre) {
      stack.pop()
      cur.right = pre
      cur.left = null
      pre = cur
      cur = null
    } else {
    // 左节点还没访问过就先访问左节点
      cur = cur.left
    }
  }
}
