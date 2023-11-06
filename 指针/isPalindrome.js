/*
  验证回文串
  如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。
  则可以认为该短语是一个 回文串 。
  字母和数字都属于字母数字字符。
  给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

  输入: s = "A man, a plan, a canal: Panama"
  输出：true
  解释："amanaplanacanalpanama" 是回文串。
*/
/**
 * @param {string} s
 * @return {boolean}
 */
// 反转
var isPalindrome = function(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').replace(/\s/g, '').toLocaleLowerCase()
  return s === [...s].reverse().join('')
};

// 双指针
var isPalindrome2 = function(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').replace(/\s/g, '').toLocaleLowerCase()
  for (let first = 0, last = s.length - 1; first < last; first++, last--) {
    if (s[first] !== s[last]) {
      return false
    }
  }
  return true
}
const res = isPalindrome2('A man, a plan, a canal: Panama')
console.log('res', res)