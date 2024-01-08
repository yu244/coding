/*
  二叉搜索树迭代器

  实现一个二叉搜索树迭代器类BSTIterator ，表示一个按中序遍历二叉搜索树（BST）的迭代器：
  BSTIterator(TreeNode root) 初始化 BSTIterator 类的一个对象。BST 的根节点 root 会作为构造函数的一部分给出。指针应初始化为一个不存在于 BST 中的数字，且该数字小于 BST 中的任何元素。
  boolean hasNext() 如果向指针右侧遍历存在数字，则返回 true ；否则返回 false 。
  int next()将指针向右移动，然后返回指针处的数字。
  注意，指针初始化为一个不存在于 BST 中的数字，所以对 next() 的首次调用将返回 BST 中的最小元素。

  你可以假设 next() 调用总是有效的，也就是说，当调用 next() 时，BST 的中序遍历中至少存在一个下一个数字。
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
 */
// 迭代
var BSTIterator = function(root) {
  this.stack = new Array()
  this.cur = root
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    while (this.cur !== null) {
      stack.push(this.cur)
      this.cur = this.cur.left
    }
    this.cur = this.stack.pop()
    const ret = this.cur.val
    this.cur = this.cur.right
    return ret
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.cur !== null || this.stack.length
};


// 递归
var BSTIterator = function(root) {
  this.index = 0
  this.arr = new Array()
  this.dfs(root, this.arr)
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
   return this.arr[this.index++]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.index < this.arr.length
};

BSTIterator.prototype.dfs = function(root, arr) {
  if (root === null) return
  this.dfs(root.left, arr)
  arr.push(root.val)
  this.dfs(root.right, arr)
};