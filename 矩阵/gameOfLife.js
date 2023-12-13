/*
  生命游戏

  根据 百度百科 ， 生命游戏 ，简称为 生命 ，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。

  给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。
  每个细胞都具有一个初始状态： 1 即为 活细胞 （live），或 0 即为 死细胞 （dead）。
  每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

  如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
  如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
  如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
  如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
  
  下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，
  其中细胞的出生和死亡是同时发生的。给你 m x n 网格面板 board 的当前状态，返回下一个状态。

  输入：board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
  输出：[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

  输入：board = [[1,1],[1,0]]
  输出：[[1,1],[1,1]]
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  let n = board.length
  let jLen = board[0].length
  let board_init = new Array(n).fill(0).map(() => new Array(jLen).fill(0))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < jLen; j++) {
      board_init[i][j] = board[i][j]
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < jLen; j++) {
      board[i][j] = judge(i, j)
    }
  }
  function judge(row, column) {
    let num = 0
    if (row > 0) {
      board_init[row - 1][column - 1] ? num++ : num
      board_init[row - 1][column] ? num++ : num
      board_init[row - 1][column + 1] ? num++ : num
    }
    board_init[row][column - 1] ? num++ : num
    board_init[row][column + 1] ? num++ : num
    if (row < n - 1) {
      board_init[row + 1][column - 1] ? num++ : num
      board_init[row + 1][column] ? num++ : num
      board_init[row + 1][column + 1] ? num++ : num
    }
    if (board_init[row][column]) {
      if (num < 2 || num > 3) {
        return 0
      } else {
        return 1
      }
    } else {
      if (num === 3) {
        return 1
      } else {
        return 0
      }
    }
  }
};

const board = 
  [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]

console.log('gameOfLife(board)', gameOfLife(board))