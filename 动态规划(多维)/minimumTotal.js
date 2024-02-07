/*
  120. 三角形最小路径和
  给定一个三角形 triangle ，找出自顶向下的最小路径和。

  每一步只能移动到下一行中相邻的结点上。
  相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
  也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

  输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
  输出：11
  解释：如下面简图所示：
     2
    3 4
   6 5 7
  4 1 8 3
  自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

  输入：triangle = [[-10]]
  输出：-10
*/
/**
 * @param {number[][]} triangle
 * @return {number}
 */
// dfs[i][j] = min(dfs[i + 1][j], dfs[i + 1][j + 1]) + nums[i][j]
var minimumTotal = function(triangle) {
  const n = triangle.length
  const m = triangle[n - 1].length
  const memo = Array.from({ length: m }, () => new Array(m).fill(-1))
  function dfs(i, j) {
    if (memo[i][j] !== -1) return memo[i][j]
    if (i === n - 1) return triangle[i][j]
    let min = Math.min(dfs(i + 1, j), dfs(i + 1, j + 1))
    return memo[i][j] = min + triangle[i][j]
  }
  return dfs(0, 0)
};


const triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
console.log('minimumTotal()', minimumTotal(triangle))