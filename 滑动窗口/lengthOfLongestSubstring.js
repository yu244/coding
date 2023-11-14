/*
  无重复字符的最长子串

  给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

  输入: s = "abcabcbb"
  输出: 3 
  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

  输入: s = "bbbbb"
  输出: 1
  解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

  输入: s = "pwwkew"
  输出: 3
  解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
  请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
*/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0
  let right = 0
  let str = ''
  let result = 0
  while (right < s.length) {
    while(str.includes(s[right]) && left < right) {
      left++
      // 此处要保证 right 前的元素不包含 s[right]
      str = s.slice(left, right)
    }
    str = s.slice(left, right + 1)
    if (str.length > result) {
      result = str.length
    }
    right++
  }
  return result
};
const s = "pwwkew"
console.log('lengthOfLongestSubstring(s)', lengthOfLongestSubstring(s))