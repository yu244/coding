/*
  2641. 二叉树的堂兄弟节点 II
  给你一棵二叉树的根 root ，请你将每个节点的值替换成该节点的所有 堂兄弟节点值的和 。

  如果两个节点在树中有相同的深度且它们的父节点不同，那么它们互为 堂兄弟 。

  请你返回修改值之后，树的根 root 。

  注意，一个节点的深度指的是从树根节点到这个节点经过的边数。
  输入：root = [5,4,9,1,10,null,7]
  输出：[0,0,0,7,7,null,11]
  解释：上图展示了初始的二叉树和修改每个节点的值之后的二叉树。
  - 值为 5 的节点没有堂兄弟，所以值修改为 0 。
  - 值为 4 的节点没有堂兄弟，所以值修改为 0 。
  - 值为 9 的节点没有堂兄弟，所以值修改为 0 。
  - 值为 1 的节点有一个堂兄弟，值为 7 ，所以值修改为 7 。
  - 值为 10 的节点有一个堂兄弟，值为 7 ，所以值修改为 7 。
  - 值为 7 的节点有两个堂兄弟，值分别为 1 和 10 ，所以值修改为 11 。
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
 * @return {TreeNode}
 */
// 深度相同操作估计得用广度优先也就是while + for + queue实现同一层的操作
// 两次广度优先搜索
var replaceValueInTree = function(root) {
  const queue = [root]
  root.val = 0
  while (queue.length > 0) {
    const queue2 = new Array()
    let sum = 0
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const cur = queue[i]
      if (cur.left !== null) {
        queue2.push(cur.left)
        sum += cur.left.val
      }
      if (cur.right !== null) {
        queue2.push(cur.right)
        sum += cur.right.val
      }
    }
    for (let i = 0; i < len; i++) {
      const cur = queue[i]
      let temp = 0
      if (cur.left !== null) {
        temp += cur.left.val
        queue.push(cur.left)
      }
      if (cur.right !== null) {
        temp += cur.right.val
        queue.push(cur.right)
      }
      if (cur.left !== null) {
        cur.left.val = sum - temp
      }
      if (cur.right !== null) {
        cur.right.val = sum - temp
      }
    }
    queue.length = 0
    queue.push(...queue2)
  }
  return root
};

// 俩队列，求出和的同时重新遍历计算
var replaceValueInTree = function(root) {
  const queue = [root]
  root.val = 0
  while (queue.length > 0) {
    const queue2 = new Array()
    let sum = 0
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const cur = queue[i]
      if (cur.left !== null) {
        queue2.push(cur.left)
        sum += cur.left.val
      }
      if (cur.right !== null) {
        queue2.push(cur.right)
        sum += cur.right.val
      }
    }
    for (let i = 0; i < len; i++) {
      const cur = queue[i]
      let temp = 0
      if (cur.left !== null) {
        temp += cur.left.val
        queue.push(cur.left)
      }
      if (cur.right !== null) {
        temp += cur.right.val
        queue.push(cur.right)
      }
      if (cur.left !== null) {
        cur.left.val = sum - temp
      }
      if (cur.right !== null) {
        cur.right.val = sum - temp
      }
    }
    queue.length = 0
    queue.push(...queue2)
  }
  return root
};
