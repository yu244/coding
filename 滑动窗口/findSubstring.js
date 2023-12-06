/*
  串联所有单词的子串

  给定一个字符串 s 和一个字符串数组 words。 words 中所有字符串 长度相同。

  s 中的 串联子串 是指一个包含  words 中所有字符串以任意顺序排列连接起来的子串。

  例如，如果 words = ["ab","cd","ef"]， 那么 "abcdef"， "abefcd"，"cdabef"， "cdefab"，"efabcd"， 和 "efcdab" 都是串联子串。 "acdbef" 不是串联子串，因为他不是任何 words 排列的连接。
  返回所有串联子串在 s 中的开始索引。你可以以 任意顺序 返回答案。

  输入：s = "barfoothefoobarman", words = ["foo","bar"]
  输出：[0,9]
  解释：因为 words.length == 2 同时 words[i].length == 3，连接的子字符串的长度必须为 6。
  子串 "barfoo" 开始位置是 0。它是 words 中以 ["bar","foo"] 顺序排列的连接。
  子串 "foobar" 开始位置是 9。它是 words 中以 ["foo","bar"] 顺序排列的连接。
  输出顺序无关紧要。返回 [9,0] 也是可以的。

  输入：s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
  输出：[]
  解释：因为 words.length == 4 并且 words[i].length == 4，所以串联子串的长度必须为 16。
  s 中没有子串长度为 16 并且等于 words 的任何顺序排列的连接。
  所以我们返回一个空数组。

  输入：s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
  输出：[6,9,12]
  解释：因为 words.length == 3 并且 words[i].length == 3，所以串联子串的长度必须为 9。
  子串 "foobarthe" 开始位置是 6。它是 words 中以 ["foo","bar","the"] 顺序排列的连接。
  子串 "barthefoo" 开始位置是 9。它是 words 中以 ["bar","the","foo"] 顺序排列的连接。
  子串 "thefoobar" 开始位置是 12。它是 words 中以 ["the","foo","bar"] 顺序排列的连接。
*/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  let n = words.length * words[0].length
  let arr = []
  let current
  let L = 0
  let R
  current = s.slice(L, L + n)
  let res = []
  while (L < s.length - words[0].length) {
    arr = [...words]
    current = s.slice(L, L + n)
    let match = true
    pre = []
    let temp
    for (let i = 0; i < arr.length; i++) {
      temp = current.indexOf(arr[i])
      if (temp === -1) {
        match = false
        break
      } else {
        current = current.slice(0, temp).concat(current.slice(temp + words[0].length, current.length))
      }
    }
    if (match) {
      res.push(L)
    }
    L = L + words[0].length
  }
  return res
};

const s = 'lingmindraboofooowingdingbarrwingmonkeypoundcake'
const words = ["fooo","barr","wing","ding","wing"]

console.log('findSubstring(s, words)', findSubstring(s, words))

// 递归组成哈希表
// const word = ["foo","bar","the"];
// const result = [];

// const helper = (leaveWordsList, currentWord) => {
//   if (leaveWordsList.length === 0) {
//     result.push(currentWord)
//   } else {
//     for (let i = 0; i < leaveWordsList.length; i++) {
//       let newWordsList = leaveWordsList.slice(0, i).concat(leaveWordsList.slice(i + 1))
//       helper(newWordsList, currentWord + leaveWordsList[i])      
//     }
//   }
// }

// helper(word, '')
// console.log('result', result)
