/*
  N 皇后

  按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。

  n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

  给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

  每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

  输入：n = 4
  输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
  解释：如上图所示，4 皇后问题存在两个不同的解法。
  示例 2：

  输入：n = 1
  输出：[["Q"]]
*/
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const res = []
  const columns = []
  const leftSkew = []
  const rightSkew = []
  const path = []
  const str = new Array(n).fill('.')
  let temp
  function addQueen(row, col) {
    columns[col] = true
    leftSkew[col - row] = true
    rightSkew[col + row] = true
    temp = str.slice()
    temp[col] = 'Q'
    path.push(temp.join(''))
  }
  function removeQueen(row, col) {
    columns[col] = false
    leftSkew[col - row] = false
    rightSkew[col + row] = false
    path.pop()
  }
  function canSet(row, col) {
    return !columns[col] && !leftSkew[col - row] && !rightSkew[col + row]
  }
  function backtrack (row) {
    if (path.length === n) {
      res.push(path.slice())
      return
    }
    for (let col = 0; col < n; col++) {
      if (canSet(row, col)) {
        addQueen(row, col)
        backtrack(row + 1)
        removeQueen(row, col)
      }
    }
  }
  backtrack(0)
  return res
};