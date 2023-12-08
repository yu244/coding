/*
  有效的字母异位词

  给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

  注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

  输入: s = "anagram", t = "nagaram"
  输出: true

  输入: s = "rat", t = "car"
  输出: false
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  let arr = new Array(26).fill(0)
  let brr = new Array(26).fill(0)
  let base = 'a'.charCodeAt()
  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt() - base] += 1
    brr[t[i].charCodeAt() - base] += 1
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== brr[j]) return false
  }
  return true
};

const s = "anagram", t = "nagaram"
console.log('isAnagram(s, t)', isAnagram(s, t))