/*
  旋转图像
  给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

  你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

  输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
  输出：[[7,4,1],[8,5,2],[9,6,3]]

  输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
  输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//  [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
//  [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
/*
  假设单个数组长度为 n , 对于数组的第一项，循环 arr[0]
  arr[0][0] = brr[0][3]
  arr[0][1] = brr[1][3]
  arr[0][2] = brr[2][3]
  arr[0][3] = brr[3][3]
  arr[1][0] = brr[0][2]
  arr[1][1] = brr[1][2]
  ...
  arr[i][j] = brr[j][n - 1 - i]
*/  
// 借助数组
var rotate = function(matrix) {
  const n = matrix.length
  const arr = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[j][n - 1 - i] = matrix[i][j]
    }   
  }
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      matrix[x][y] = arr[x][y]
    }   
  }
};
// 水平翻转 + 对角线翻转
var rotate = function(matrix) {
  const n = matrix.length
  for (let i = 0; i < n / 2; i++) {
    [matrix[i], matrix[n - 1 - i]] = [matrix[n - 1 - i], matrix[i]]
  }
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < j; k++) {
      [matrix[j][k], matrix[k][j]] = [matrix[k][j], matrix[j][k]]
    }
  }
}
const matrix = 
  [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]

console.log('rotate(matrix)', rotate(matrix))