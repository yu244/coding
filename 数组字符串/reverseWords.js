/*
  反转字符串中的单词

  给你一个字符串 s ，请你反转字符串中 单词 的顺序。

  单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。

  返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。

  注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。
  返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

  输入：s = "the sky is blue"
  输出："blue is sky the"

  输入：s = "  hello world  "
  输出："world hello"
  解释：反转后的字符串中不能存在前导空格和尾随空格。

  输入：s = "a good   example"
  输出："example good a"
  解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。
  
*/
/**
 * @param {string} s
 * @return {string}
 */
// 进阶：如果字符串在你使用的编程语言中是一种可变数据类型，请尝试使用 O(1) 额外空间复杂度的 原地 解法。
// 原地 JS 貌似解不了
// var reverseWords = function(s) {
//   let temp = null
//   let curEmpty = false
//   for (let i = 0; i < s.length; i++) {
//     if (!curEmpty && s[i] === ' ') {
//       curEmpty = true
//       temp = i
//     }
//     if (curEmpty && s[i] !== ' ') {
//       curEmpty = false
//       s = s.slice(0, temp + 1).concat(s.slice(i, s.length))
//     }
//     if (i === s.length - 1 && curEmpty) {
//       s = s.slice(0, temp)
//     }
//   }
//   if (s[0] === ' ') {
//     s = s.slice(1, s.length)
//   }
//   console.log('s', s, s.length)
//   // let left = 0
//   // let right = s.length - 1
//   // while (left <= right) {
//   //   if (s[left] === ' ') {
//   //     while (left <= right && s[right] !== ' ') {
//   //       right--
//   //     }
//   //   }
//   //   left++
//   // }
//   return s
// };

var reverseWords = function(s) {
  let arr = []
  let lock = false
  temp = null
  s = s.concat(' ')
  for (let i = 0; i < s.length; i++) {
    if (!lock && s[i] !== ' ') {
      lock = true
      temp = i
    }
    if (lock && s[i] === ' ') {
      lock = false
      arr.push(s.slice(temp, i))
    }
  }
  return arr.reverse().join(' ')
};

const s = 'the sky is blue'

console.log('reverseWords(s)', reverseWords(s))