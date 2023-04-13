/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows < 2) {
      return [[1]]
  }
  if (numRows === 2) {
      return [[1],[1,1]]
  }
  let pre = [[1]]
  let current = [[1],[1,1]]
  let result = [[1],[1,1]]
  let temp = []
  for (let i = 2; i < numRows; i++) {
      temp = []
      for (let k = 0; k < numRows; k++) {
          if (k === 0 || k === numRows - 1) {
              temp.push(1)
          } else {
              temp[k] = current[i - 1][k] + current[i - 1][k - 1]
          }
      }
      result.push(temp)
      current = [...result]
  }
  return result
};