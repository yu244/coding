/*
  矩阵置零

  给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。

  输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
  输出：[[1,0,1],[0,0,0],[1,0,1]]

  输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
  输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let iLen = matrix.length
  let jLen = matrix[0].length
  let iSet = new Set()
  let jSet = new Set()
  for (let i = 0; i < iLen; i++) {
    for (let j = 0; j < jLen; j++) {
      if (matrix[i][j] === 0) {
        iSet.add(i)
        jSet.add(j)
      }
    }
  }
  for (let i = 0; i < iLen; i++) {
    for (let j = 0; j < jLen; j++) {
      if (iSet.has(i) || jSet.has(j)) {
        matrix[i][j] = 0
      }
    }
  }
};

const matrix = 
  [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
  // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

console.log('setZeroes(matrix)', setZeroes(matrix))