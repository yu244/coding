/*
  格雷编码
  n 位格雷码序列 是一个由 2n 个整数组成的序列，其中：
  每个整数都在范围 [0, 2n - 1] 内（含 0 和 2n - 1）
  第一个整数是 0
  一个整数在序列中出现 不超过一次
  每对 相邻 整数的二进制表示 恰好一位不同 ，且
  第一个 和 最后一个 整数的二进制表示 恰好一位不同
  给你一个整数 n ，返回任一有效的 n 位格雷码序列 。

  输入：n = 2
  输出：[0,1,3,2]
  解释：
  [0,1,3,2] 的二进制表示是 [00,01,11,10] 。
  - 00 和 01 有一位不同
  - 01 和 11 有一位不同
  - 11 和 10 有一位不同
  - 10 和 00 有一位不同
  [0,2,3,1] 也是一个有效的格雷码序列，其二进制表示是 [00,10,11,01] 。
  - 00 和 10 有一位不同
  - 10 和 11 有一位不同
  - 11 和 01 有一位不同
  - 01 和 00 有一位不同

  输入：n = 1
  输出：[0,1]
*/
/**
 * @param {number} n
 * @return {number[]}
 */
// 右子树的节点左右路径对换，将左路径由 0 改为 1
var grayCode = n => {
  const ans = [];
  dfs(ans, 0, 0, 0, n);
  return ans;
}
var dfs = (ans, node, isRightSubtree, depth, n) => {
  if (depth == n) {
    ans.push(node);
    return;
  }
  dfs(ans, (node << 1) | isRightSubtree, 0, depth + 1, n);
  dfs(ans, (node << 1) | isRightSubtree ^ 1, 1, depth + 1, n);
}

console.log('grayCode(2)', grayCode(4))

var grayCode = function (n) {
  const res = new Array()
  function dfs (path, isRight, depth) {
    if (depth === n) {
      res.push(path)
      return
    }
    // 对应左子树，如果 isRight 为 0， 那么左路径为 0 ，如果 isRight 是 1，那么左路径就是 1
    dfs((path << 1) | isRight, 0, depth + 1)
    // 对应右子树，如果 isRight 为 0， 那么右路径为 1 ，如果 isRight 是 1，那么右路径就是 0
    dfs((path << 1) | isRight ^ 1, 1, depth + 1)
  }
  dfs(0, 0, 0)
  return res
}