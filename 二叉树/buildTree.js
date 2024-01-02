/*
  从前序与中序遍历序列构造二叉树

  给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历，
  inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

  输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
  输出: [3,9,20,null,null,15,7]

  输入: preorder = [-1], inorder = [-1]
  输出: [-1]
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 官解
var buildTree = function(preorder, inorder) {
  const indexMap = new Map()
  const n = inorder.length
  for (let i = 0; i < n; i++) {
    indexMap.set(inorder[i], i)
  }

  function myBuildTree (preorder, inorder, preorder_left, preorder_right, inorder_left, inorder_right) {
    if (preorder_left > preorder_right) {
      return null
    }
    // 前序遍历第一个节点就是根节点
    let preorder_root = preorder_left
    // 中序遍历中定位根节点
    let inorder_root = indexMap.get(preorder[preorder_root])
    // 建立根节点
    let root = new TreeNode(preorder[preorder_root])
    // 得到左子树中节点数目
    let size_left_subtree = inorder_root - inorder_left
    // 递归构造左子树，并连接到根节点
    // 先序遍历中（从 左边界+1 开始的 size_left_subtree）个数对应了中序遍历中 （从左边界开始 到 根节点定位-1 的元素）
    root.left = myBuildTree(preorder, inorder, preorder_left + 1, preorder_left + size_left_subtree, inorder_left, inorder_root - 1)
    // 递归构造右子树，并连接到根节点
    // 先序遍历中（从左边界+1+左子树节点数目 开始 到 右边界）的元素对应了中序遍历中 （从根节点定位+1 到 右边界 的元素）
    root.right = myBuildTree(preorder, inorder, preorder_left + size_left_subtree + 1, preorder_right, inorder_root + 1, inorder_right)
    return root
  }

  return myBuildTree(preorder, inorder, 0, n - 1, 0, n - 1);
};

// 先序数组 + 中序数组构建二叉树
var buildTree = function(preorder, inorder) {
  const n = inorder.length
  const indexMap = new Map()
  for (let i = 0; i < n; i++) {
    indexMap.set(inorder[i], i)
  }
  function helper (p_start, p_end, i_start, i_end) {
    if (p_start > p_end) return null
    // 当前根节点的值
    const rootVal = preorder[p_start]
    // 创建当前根节点
    const root = new TreeNode(rootVal)
    // 找到分割点,也就是在 inorder 中找到当前的根节点位置
    const mid = indexMap.get(rootVal)
    // 左侧树的个数
    const leftNum = mid - i_start
    // 递归构建左树,确定左子树范围
    // 对 先序 preorder 来说,前两个参数 (当前根节点 + 1 就是左树起点)(左树终点 = 当前起点 + 左树总个数)
    // 对 中序 inorder  来说,后两个参数 (起点不变)(终点是当前根节点 - 1)
    root.left = helper(p_start + 1, p_start + leftNum, i_start, mid - 1)
    // 递归构建右树,确定右子树范围
    // 对 先序 preorder 来说,前两个参数 (当前根节点起点 + 左数个数 + 1是右树起点)(右树终点不变)
    // 对 中序 inorder  来说,后两个参数 (右树起点 = 分割点 + 1)(终点不变)
    root.right = helper(p_start + leftNum + 1, p_end, mid + 1, i_end)
    return root
  }
  // 先序遍历起始和结束、中序遍历起始和结束
  return helper(0, n - 1, 0, n - 1)
}

const preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
buildTree(preorder, inorder)




console.log('buildTree(preorder, inorder)', buildTree(preorder, inorder))