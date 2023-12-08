/*
  赎金信

  给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

  如果可以，返回 true ；否则返回 false 。

  magazine 中的每个字符只能在 ransomNote 中使用一次。
*/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// 普通 hash 计数
// 也可用 charCodeAt 记录 magazine 中字母出现的频次，通过创建26字母长度的数组 位置相较于 a 记录次数，再循环 ransomNote 减少频次直到小于 0 返回 false
// 题外 ： charCodeAt 介于 0 和 65535， 'a' 在 97
var canConstruct = function(ransomNote, magazine) {
  let mMap = new Map()
  for (const item of magazine) {
    mMap.set(item, (mMap.get(item) || 0) + 1)
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (mMap.get(ransomNote[i]) === undefined) {
      return false
    } else {
      mMap.set(ransomNote[i], mMap.get(ransomNote[i]) - 1)
    }
    if (mMap.get(ransomNote[i]) < 0) return false
  }
  return true
};

const ransomNote = "aa", magazine = "aab"
console.log('canConstruct(ransomNote, magazine)', canConstruct(ransomNote, magazine))