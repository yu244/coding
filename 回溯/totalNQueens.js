/*
  N皇后2

  n 皇后问题 研究的是如何将 n 个皇后放置在 n × n 的棋盘上，并且使皇后彼此之间不能相互攻击。

  给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。

  输入：n = 4
  输出：2
  解释：如上图所示，4 皇后问题存在两个不同的解法。

  输入：n = 1
  输出：1
*/
/**
 * @param {number} n
 * @return {number}
 */
// 写对角线判断+回溯
var totalNQueens = function(n) {
  let res = 0
  const columns = []
  const leftSkew = []
  const rightSkew = []

  function addQueen(row, col) {
    columns[col] = true
    leftSkew[col - row] = true
    rightSkew[col + row] = true
  }

  function removeQueen(row, col) {
    columns[col] = false
    leftSkew[col - row] = false
    rightSkew[col + row] = false
  }

  function canSet(row, col) {
    return !columns[col] && !leftSkew[col - row] && !rightSkew[col + row]
  }

  function backtrack (row, queens) {
    if (queens === n) {
      res++
      return
    }
    for (let col = 0; col < n; col++) {
      if (canSet(row, col)) {
        addQueen(row, col)
        backtrack(row + 1, queens + 1)
        removeQueen(row, col)
      }
    }
  }
  backtrack(0, 0)
  return res
};