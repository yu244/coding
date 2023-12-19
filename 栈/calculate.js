/*
  基本计算器

  给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

  注意:不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。
  
  输入：s = "1 + 1"
  输出：2

  输入：s = " 2-1 + 2 "
  输出：3

  输入：s = "(1+(4+5+2)-3)+(6+8)"
  输出：23

  1 <= s.length <= 3 * 105
  s 由数字、'+'、'-'、'('、')'、和 ' ' 组成
  s 表示一个有效的表达式
  '+' 不能用作一元运算(例如， "+1" 和 "+(2 + 3)" 无效)
  '-' 可以用作一元运算(即 "-1" 和 "-(2 + 3)" 是有效的)
  输入中不存在两个连续的操作符
  每个数字和运行的计算将适合于一个有符号的 32位 整数
*/
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const symbol = {
    '+': true,
    '-': true,
    '(': true,
    ')': true
  }
  let str = ''
  let stk = new Array()
  let bracketList = new Array()
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      if (str !== '') {
        stk.push(str)
        str = ''
      }
      continue
    }
    if (symbol[s[i]]) {
      if (str !== '') {
        stk.push(str)
        str = ''
      }
      if (s[i] === ')') {
        let j = bracketList.pop()
        let num = compute(stk.slice(j + 1, stk.length))
        for (let k = stk.length; k > j; k--) {
          stk.pop()
        }
        stk.push(num)
      } else if (s[i] === '(') {
        stk.push(s[i])
        bracketList.push(stk.length - 1)
      } else if (s[i] === '+') {
        stk.push(s[i])
      } else {
        if (stk[stk.length - 1] === '(' || stk.length === 0) {
          stk.push(0)
          stk.push('-')
        } else {
          stk.push(s[i])
        }
      }
    } else {
      str += s[i]
      if (i === s.length - 1) {
        stk.push(str)
      }
    }
  }
  function compute (arr) {
    let num = Number(arr[0])
    for (let i = 2; i < arr.length; i++) {
      if (arr[i - 1] === '+') {
        num = num + Number(arr[i])
      } else if (arr[i - 1] === '-') {
        num = num - Number(arr[i])
      }
    }
    return num
  }
  return compute(stk)
};
const s = "1-(-2)"
console.log('calculate(s)', calculate(s))