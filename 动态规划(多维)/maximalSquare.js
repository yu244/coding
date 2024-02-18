/*
  221. 最大正方形
  在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

  输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
  输出：4

  输入：matrix = [["0","1"],["1","0"]]
  输出：1

  输入：matrix = [["0"]]
  输出：0
*/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
// dp[i][j] = min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1]) + 1
var maximalSquare = function(matrix) {
  const n = matrix.length
  const m = matrix[0].length
  const dp = Array.from({ length: n }, () => new Array(m).fill(0))
  let max = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === '1') {
        let left = i > 0 ? dp[i - 1][j] : 0
        let top = j > 0 ? dp[i][j - 1] : 0
        let topLeftCorner = i > 0 && j > 0 ? dp[i - 1][j - 1] : 0
        dp[i][j] = Math.min(left, top, topLeftCorner) + 1
        max = Math.max(dp[i][j], max)
      }      
    }
  }
  return max * max
};
const matrix = [["0"]]
console.log('maximalSquare(matrix)', maximalSquare(matrix))