/*
  3.无重复字符的最长子串

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
// 试试set
var lengthOfLongestSubstring = function(s) {
  const n = s.length
  const set = new Set()
  let left = 0
  let max = 0
  for (let i = 0; i < n; i++) {
    if (set.has(s[i])) {
      while (s[left] !== s[i]) {
        set.delete(s[left])
        left++
      }
      left++
    } else {
      set.add(s[i])
    }
    max = Math.max(i - left + 1, max)
  }
  return max
}
// 简化一下set
var lengthOfLongestSubstring = function(s) {
  const n = s.length
  const set = new Set()
  let left = 0
  let max = 0
  for (let i = 0; i < n; i++) {
    const cur = s[i]
    while (set.has(cur)) {
      set.delete(s[left++])
    }
    set.add(cur)
    max = Math.max(i - left + 1, max)
  }
  return max
}

// 略慢，外层的while可以用for
var lengthOfLongestSubstring = function(s) {
  const n = s.length
  if (n <= 1) return n
  let left = 0
  let right = 0
  let max = 0
  const map = {}
  while (right < n) {
    if (map[s[right]] === true) {
      while(s[left] !== s[right]) {
        map[s[left]] = false
        left++
      }
      left++
    } else {
      map[s[right]] = true
    }
    max = Math.max(right - left + 1, max)
    right++
  }
  return max
}

// 第一次做
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