/*
  二叉树的最近公共祖先

  给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

  百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，
  满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

  输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
  输出：3
  解释：节点 5 和节点 1 的最近公共祖先是节点 3 。

  输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
  输出：5
  解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。

  输入：root = [1,2], p = 1, q = 2
  输出：1
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = (root, p, q) => {
  if (root == null) { // 遇到null，返回null 没有LCA
      return null;
  }
  if (root == q || root == p) { // 遇到p或q，直接返回当前节点
      return root;
  }
  // 非null 非q 非p，则递归左右子树
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  // 根据递归的结果，决定谁是LCA
  if (left && right) {
      return root;
  }
  if (left == null) {
      return right;
  }
  return left;
}
