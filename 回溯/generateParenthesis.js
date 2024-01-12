/*
  括号生成
  数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

  输入：n = 3
  输出：["((()))","(()())","(())()","()(())","()()()"]

  输入：n = 1
  输出：["()"]
*/
/**
 * @param {number} n
 * @return {string[]}
 */
// dfs + 栈
// var generateParenthesis = function(n) {
//   const res = new Array()
//   const len = n * 2
//   function dfs (path) {
//     if (path.length === len) {
//       if (isTrue(path)) {
//         res.push(path)
//       }
//       return
//     }
//     dfs(path.concat('('))
//     dfs(path.concat(')'))
//   }
//   dfs('')
//   function isTrue (str) {
//     let res = true
//     const stack = []
//     for (let i = 0; i < str.length; i++) {
//       if (i !== 0 && str[i] === ')' && stack[stack.length - 1] === '(') {
//         stack.pop()
//       } else {
//         stack.push(str[i])
//       }
//     }
//     if (stack.length !== 0) {
//       return false
//     }
//     return res
//   }
//   return res
// };

// 递归剪枝的条件是左右括号数量不一致
var generateParenthesis = function(n) {
  const res = new Array()
  function dfs (str, left, right) {
    if (left < 0 || left > right) {
      return
    }
    if (left === 0 && right === 0) {
      res.push(str)
      return
    }
    dfs(str + '(', left - 1, right)
    dfs(str + ')', left, right - 1)
  }
  dfs('', n, n)
  return res
}
console.log('generateParenthesis(3)', generateParenthesis(3))