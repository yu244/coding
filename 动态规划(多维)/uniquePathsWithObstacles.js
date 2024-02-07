/*
  63. 不同路径 II
  一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

  机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。

  现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

  网格中的障碍物和空位置分别用 1 和 0 来表示。
  输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
  输出：2
  解释：3x3 网格的正中间有一个障碍物。
  从左上角到右下角一共有 2 条不同的路径：
  1. 向右 -> 向右 -> 向下 -> 向下
  2. 向下 -> 向下 -> 向右 -> 向右
*/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// 空间复杂度 O(mn)
var uniquePathsWithObstacles = function(obstacleGrid) {
  const n = obstacleGrid.length
  const m = obstacleGrid[0].length
  if (obstacleGrid[n - 1][m - 1] === 1) return 0
  const dp = Array.from({ length: n }, () => new Array(m).fill(0))
  dp[n - 1][m - 1] = 1
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      if (i === n - 1 && j === m - 1) continue
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0
        continue
      }
      if (i === n - 1) dp[i][j] = dp[i][j + 1]
      if (j === m - 1) dp[i][j] = dp[i + 1][j]
      if (i !== n - 1 && j !== m - 1) dp[i][j] = dp[i + 1][j] + dp[i][j + 1]
    }    
  }
  return dp[0][0]
};
// 状态压缩滚动数组，空间复杂度 O(m)
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0
  const n = obstacleGrid.length
  const m = obstacleGrid[0].length
  const dp = new Array(m).fill(0)
  dp[0] = 1
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[j] = 0
        continue
      }
      if (j - 1 >= 0 && obstacleGrid[i][j - 1] === 0) {
        dp[j] += dp[j - 1]
      }
    }
  }
  return dp[m - 1]
}
const obstacleGrid = [[0,0,0],[0,0,0],[0,0,0]]
console.log('uniquePathsWithObstacles()', uniquePathsWithObstacles(obstacleGrid))