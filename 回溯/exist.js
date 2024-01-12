/*
  单词搜索
  给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。
  如果 word 存在于网格中，返回 true ；否则，返回 false 。

  单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
  同一个单元格内的字母不允许被重复使用。

  输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
  输出：true

  输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
  输出：true

  输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
  输出：false
*/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const m = board.length
  const n = board[0].length
  const wLen = word.length
  let res = false
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        dfs(i, j, 0, board)
        if (res === true) return true
      }      
    }
  }
  
  function dfs(row, col, idx, map) {
    if (idx === wLen - 1 || res === true) {
      res = true
      return
    }
    let temp = map[row][col]
    map[row][col] = false
    if (row - 1 >= 0 && map[row - 1][col] === word[idx + 1]) dfs(row - 1, col, idx + 1, map)
    if (row + 1 <  m && map[row + 1][col] === word[idx + 1]) dfs(row + 1, col, idx + 1, map)
    if (col - 1 >= 0 && map[row][col - 1] === word[idx + 1]) dfs(row, col - 1, idx + 1, map)
    if (col + 1 <  n && map[row][col + 1] === word[idx + 1]) dfs(row, col + 1, idx + 1, map)
    map[row][col] = temp
  }
  return res
};
const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
console.log('exist()', exist(board, word))