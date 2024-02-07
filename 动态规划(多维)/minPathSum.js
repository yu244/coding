/*
  64. 最小路径和

  给定一个包含非负整数的 m x n 网格 grid ，
  请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

  说明：每次只能向下或者向右移动一步。

  输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
  输出：7
  解释：因为路径 1→3→1→1→1 的总和最小。

  输入：grid = [[1,2,3],[4,5,6]]
  输出：12
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
// 动态规划
// dp[i][j] = min(dp[i + 1][j], dp[i][j + 1]) + nums[i][j]
var minPathSum = function(grid) {
  const n = grid.length
  const m = grid[0].length
  const dp = Array.from({ length: n }, () => new Array(m).fill(0))
  dp[n - 1][m - 1] = grid[n - 1][m - 1]
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      if (i === n - 1 && j === m - 1) continue
      if (i === n - 1) dp[i][j] = dp[i][j + 1] + grid[i][j]
      if (j === m - 1) dp[i][j] = dp[i + 1][j] + grid[i][j]
      if (i !== n - 1 && j !== m - 1) dp[i][j] = Math.min(dp[i][j + 1], dp[i + 1][j]) + grid[i][j]
    }
  }
  return dp[0][0]
}
// 递归 + 记忆化
// dfs(i, j) = min(dfs(i, j + 1), dfs(i + 1, j)) + nums[i][j]
var minPathSum = function(grid) {
  const n = grid.length
  const m = grid[0].length
  const memo = Array.from({ length: n }, () => new Array(m).fill(-1))
  function dfs (i, j) {
    if (memo[i][j] !== -1) return memo[i][j]
    if (i === n - 1 && j === m - 1) return grid[i][j]
    let bottom = i < n - 1 ? dfs(i + 1, j) : Infinity
    let right = j < m - 1 ? dfs(i, j + 1) : Infinity
    return memo[i][j] = Math.min(bottom, right) + grid[i][j]
  }
  return dfs(0, 0)
};
const grid = [[1,2,3],[4,5,6]]
console.log('minPathSum(grid)', minPathSum(grid))
