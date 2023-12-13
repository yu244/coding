/*
  螺旋矩阵

  给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

  输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
  输出：[1,2,3,6,9,8,7,4,5]

  输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
  输出：[1,2,3,4,8,12,11,10,9,5,6,7]
*/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length || !matrix[0].length) return []
  let res = []
  let left = 0, right = matrix[0].length - 1, top = 0, bottom = matrix.length - 1
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
    for (let j = top + 1; j <= bottom; j++) {
      res.push(matrix[j][right])
    }
    // 此时右和下两步执行完毕
    // 用left和right判定是否需要继续向上(是否已经在最后一列)
    // 用top和right判定是否需要继续向左(是否已经在最后一行)
    if (left < right && top < bottom) {
      for (let k = right - 1; k > left; k--) {
        res.push(matrix[bottom][k])
      }
      for (let x = bottom; x > top; x--) {
        res.push(matrix[x][left])
      }
    }
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
  }
  return res
};

const matrix = [[1,2,3],[4,5,6],[7,8,9],[,5,6]]
console.log('spiralOrder(matrix)', spiralOrder(matrix))