/*
  有效的括号

  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

  有效字符串需满足：

  左括号必须用相同类型的右括号闭合。
  左括号必须以正确的顺序闭合。
  每个右括号都有一个对应的相同类型的左括号。
  
  输入：s = "()"
  输出：true

  输入：s = "()[]{}"
  输出：true

  输入：s = "(]"
  输出：false
*/
/**
 * @param {string} s
 * @return {boolean}
 */
// 第二次做
var isValid = function(s) {
  const map = {
    ')':'(',
    ']':'[',
    '}':'{'
  }
  const queue = new Array()
  for (let i = 0; i < s.length; i++) {
    if (queue.length === 0) {
      queue.push(s[i])
      continue
    }
    const cur = queue[queue.length - 1]
    if (map[s[i]] === cur) {
      queue.pop()
    } else {
      queue.push(s[i])
    }
  }
  if (queue.length > 0) return false
  return true
}
// 第一次做
var isValid = function(s) {
  const sMap = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ])
  let stk = []
  for (const str of s) {
    // 对 前括号 入栈，对后括号判断是否排在第一个 或者 前一个值是否是对应前括号
    // 若判断通过，将前一个括号出栈，一对匹配成功
    if (sMap.has(str)) {
      if (!stk.length || stk[stk.length - 1] !== sMap.get(str)) return false
      stk.pop()
    } else {
      stk.push(str)
    }
  }
  // 判断剩余的栈中是否有留存未匹配
  return !stk.length
};

const s = "()[]{}{"
console.log('isValid(s)', isValid(s))