/*
  最小覆盖子串

  给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

  注意：
  对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
  如果 s 中存在这样的子串，我们保证它是唯一的答案。

  输入：s = "ADOBECODEBANC", t = "ABC"
  输出："BANC"
  解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。

  输入：s = "a", t = "a"
  输出："a"
  解释：整个字符串 s 是最小覆盖子串。

  输入: s = "a", t = "aa"
  输出: ""
  解释: t 中两个字符 'a' 均应包含在 s 的子串中，
  因此没有符合条件的子字符串，返回空字符串。
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 单指针每次重建 map 解法，265 / 267 超时
var minWindow = function(s, t) {
  let tMap = new Map()
  let right = 1
  let temp = Infinity
  let res = []
  if (s.length === 0) return ''
  if (s === t) return t
  for (let i = 0; i < t.length; i++) {
    tMap.set(t[i], (tMap.get(t[i]) || 0) + 1)
  }
  for (let i = 0; i < s.length; i++) {
    if (tMap.get(s[i])) {
      let curMap = new Map(tMap)
      curMap.set(s[i], curMap.get(s[i]) - 1)
      if (curMap.get(s[i]) === 0) {
        curMap.delete(s[i])
      }
      if (curMap.size === 0) {
        return s[i]
      }
      right = i + 1
      while (right < s.length) {
        if (curMap.has(s[right])) {
          curMap.set(s[right], curMap.get(s[right]) - 1)
          if (curMap.get(s[right]) === 0) {
            curMap.delete(s[right])
          }
        }
        if (curMap.size === 0) {
          if (right - i < temp) {
            temp = right - i
            res = [i, right]
          }
          break
        }
        right++
      }
    }
  }
  if (res.length > 0) {
    return s.slice(res[0], res[1] + 1)
  }
  return ''
};

let s = "ab", t = "a"

console.log('minWindow(s, t)', minWindow(s, t))