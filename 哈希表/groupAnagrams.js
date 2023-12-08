/*
  字母异位词分组

  给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

  字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

  输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
  输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

  输入: strs = [""]
  输出: [[""]]

  输入: strs = ["a"]
  输出: [["a"]]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 把字符出现的次数作为 hash 表的 key
var groupAnagrams = function(strs) {
  let sMap = new Object(null)
  let base = 'a'.charCodeAt()
  for (const item of strs) {
    let arr = new Array(26).fill(0)
    for (let i = 0; i < item.length; i++) {
      arr[item[i].charCodeAt() - base]++
    }
    sMap[arr] ? sMap[arr].push(item) : sMap[arr] = [item]
  }
  return  Object.values(sMap)
}


// 对每个字符串排序之后作为 hash表 的 key
var groupAnagrams2 = function(strs) {
  let sMap = new Map()
  for (const item of strs) {
    let arr = Array.from(item)
    arr.sort()
    let key = arr.toString()
    let list = sMap.has(key) ? sMap.get(key) : new Array()
    list.push(item)
    sMap.set(key, list)
  }
  return Array.from(sMap.values())
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

console.log('groupAnagrams(strs)', groupAnagrams(strs))