/*
  最长公共前缀

  编写一个函数来查找字符串数组中的最长公共前缀。

  如果不存在公共前缀，返回空字符串 ""。


  输入：strs = ["flower","flow","flight"]
  输出："fl"
  示例 2：

  输入：strs = ["dog","racecar","car"]
  输出：""
  解释：输入不存在公共前缀。
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 1) return strs[0]
  let arr = strs.map(item => item.split(''))
  let res = []
  let pointer = 0
  let temp = arr[0][0]
  if (temp === undefined) return ''
  while (temp) {
    temp = arr[0][pointer]
    if (temp === undefined) return res.join('')
    for (let i = 1; i < arr.length; i++) {
      if (arr[i][pointer] !== temp) {
        return res.join('')
      }
    }
    res.push(temp)
    pointer++
  }
};

console.log('longestCommonPrefix(strs)', longestCommonPrefix(["flower","flower","flower","flower"]))