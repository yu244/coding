/*
  搜索二维矩阵

  给你一个满足下述两条属性的 m x n 整数矩阵：

  每行中的整数从左到右按非严格递增顺序排列。
  每行的第一个整数大于前一行的最后一个整数。
  给你一个整数 target ，如果 target 在矩阵中，返回 true ；否则，返回 false 。

  输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
  输出：true

  输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
  输出：false
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const n = matrix.length
  const m = matrix[0].length
  if (n === 0 || m === 0) return false
  const last = matrix[0].length - 1
  let left = 0, right = n - 1, ans = n
  while (left <= right) {
    let mid = ((right - left) >> 1) + left
    if (target <= matrix[mid][last]) {
      ans = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  let arr = matrix[ans]
  if (!arr) return false
  left = 0, right = m - 1
  while (left <= right) {
    let mid = ((right - left) >> 1) + left
    if (target < arr[mid]) {
      right = mid - 1
    } else if (target > arr[mid]) {
      left = mid + 1
    } else {
      return true
    }
  }
  return false
};