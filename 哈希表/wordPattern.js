/*
  单词规律
  
  给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。

  这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。

  输入: pattern = "abba", s = "dog cat cat dog"
  输出: true

  输入:pattern = "abba", s = "dog cat cat fish"
  输出: false

  输入: pattern = "aaaa", s = "dog cat cat dog"
  输出: false
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  let pMap = Object.create(null)
  let sMap = Object.create(null)
  let arr = s.split(' ')
  if (pattern.length !== arr.length) return false
  for (let i = 0; i < arr.length; i++) {
    let x = pattern[i]
    let y = arr[i]
    if ((pMap[x] && pMap[x] !== y) || (sMap[y] && sMap[y] !== x)) return false
    pMap[x] = y
    sMap[y] = x
  }
  return true
};

const pattern = "abba", s = "dog constructor constructor dog"

console.log('wordPattern(pattern, s)', wordPattern(pattern, s))