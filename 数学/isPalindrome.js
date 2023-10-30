/*
  给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
  回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
  例如，121 是回文，而 123 不是。
  输入：x = 121
  输出：true
  输入：x = -121
  输出：false
  输入：x = 10
  输出：false
*/

var isPalindrome = function(x) {
  const arr = x.toString().split('')
  console.log('arr', arr)
  let result = true
  if (arr.length < 2) {
    return result
  }
  const len = Math.floor(arr.length / 2)
  for (let i = 0; i < len; i++) {
    if (arr[i] !== arr[arr.length - 1 - i])  {
      result = false
    }
  }
  return result
};

console.log(isPalindrome(1))