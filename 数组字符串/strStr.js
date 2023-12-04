/*
  找出字符串中第一个匹配项的下标

  给你两个字符串 haystack 和 needle 
  请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。
  如果 needle 不是 haystack 的一部分，则返回  -1 。

*/


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let hLength = haystack.length
  let nLength = needle.length
  for (let i = 0; i < hLength; i++) {
    if (haystack[i] === needle[0]) {
      if (hLength < i + nLength) break
      for (let j = 0; j < nLength; j++) {
        if (needle[j] !== haystack[i + j]) {
          break
        }
        if (j === nLength - 1 && needle[j] === haystack[i + j]) return i
      }
    }
  }
  return -1
};
const haystack = 'sadbutsad'
const needle = 'bute'
console.log(strStr(haystack, needle))

