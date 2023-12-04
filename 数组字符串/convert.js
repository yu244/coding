/*
  N 字形变换

  将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

  比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

  P   A   H   N
  A P L S I I G
  Y   I   R
  之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

  请你实现这个将字符串进行指定行数变换的函数：

  string convert(string s, int numRows);
  

  示例 1：

  输入：s = "PAYPALISHIRING", numRows = 3
  输出："PAHNAPLSIIGYIR"
  示例 2：
  输入：s = "PAYPALISHIRING", numRows = 4
  输出："PINALSIGYAHRPI"
  解释：
  P     I    N
  A   L S  I G
  Y A   H R
  P     I
  示例 3：

  输入：s = "A", numRows = 1
  输出："A"
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  // 相同空数组的引用
  // let arr = new Array(numRows).fill([])
  let arr = new Array(numRows).fill().map(() => []);
  let getNewIndex = helper(numRows)
  let temp = getNewIndex()
  let pointer = 0
  while (pointer < s.length) {
    for (let i = 0; i < arr.length; i++) {
      if (i === temp) {
        arr[i].push(s[pointer])
        pointer++
      }
    }
    temp = getNewIndex()
  }
  let res = []
  for (let j = 0; j < arr.length; j++) {
    res = [...res, ...arr[j]]
  }
  return res.join('')
};

var helper = function (numRows) {
  let temp = -1
  let asc = true
  return function () {
    if (asc) {
      if (temp < numRows - 1) {
        temp++
      } else {
        asc = false
        temp--
      }
    } else {
      if (temp > 0) {
        temp--
      } else {
        asc = true
        temp++
      }
    }
    return temp
  }
}

console.log('convert', convert('PAYPALISHIRING', 4))