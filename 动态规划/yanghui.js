/* 
  杨辉三角，每个数是它左上方和右上方的数的和
  输入 numRows = 5
  输出 [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/

/* 
  根据规律总结公式
  R[i][k] = R[i - 1][k] + R[i - 1][k - 1]
*/

var generate = function(numRows) {
  if (numRows < 2) {
      return [[1]]
  }
  if (numRows === 2) {
      return [[1],[1,1]]
  }
  let result = [[1],[1,1]]
  for (let i = 2; i < numRows; i++) {
    result[i] = []
    result[i][0] = 1
    for (let k = 1; k < i; k++) {
        result[i][k] = result[i - 1][k] + result[i - 1][k - 1]
    }
    result[i][i] = 1
  }
  return result
};

console.log('generate(5)', generate(5))