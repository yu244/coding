/*
  单词拆分 II
  给定一个字符串 s 和一个字符串字典 wordDict ，在字符串 s 中增加空格来构建一个句子，使得句子中所有的单词都在词典中。以任意顺序 返回所有这些可能的句子。

  注意：词典中的同一个单词可能在分段中被重复使用多次。

  输入:s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
  输出:["cats and dog","cat sand dog"]
  示例 2：

  输入:s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
  输出:["pine apple pen apple","pineapple pen apple","pine applepen apple"]
  解释: 注意你可以重复使用字典中的单词。
  示例 3：

  输入:s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
  输出:[]
  

  提示：

  1 <= s.length <= 20
  1 <= wordDict.length <= 1000
  1 <= wordDict[i].length <= 10
  s 和 wordDict[i] 仅有小写英文字母组成
  wordDict 中所有字符串都 不同
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const n = s.length
  const wordSet = new Set(wordDict)
  const memo = new Array(n)
  function dfs(start) {
    if (memo[start]) return memo[start]
    if (start === n) {
      return [[]]
    }
    const res = []
    for (let i = start + 1; i <= n; i++) {
      const word = s.slice(start, i)
      if (wordSet.has(word)) {
        const restRes = dfs(i)
        for (const restWords of restRes) {
          res.push([word].concat(restWords))
        }
      }
    }
    memo[start] = res
    return res
  }
  return dfs(0).map(item => {
    return item.join(' ')
  })
}

const s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
console.log('wordBreak(catsanddog)', wordBreak(s, wordDict))

// const wordSet = new Set(wordDict)
// const n = s.length
// const memo = new Array(n + 1)
// function dfs(start) {
//   if (memo[start]) return memo[start]
//   if (start > n - 1) {
//     return [[]]
//   }
//   const res = []
//   for (let i = start + 1; i <= n; i++) {
//     const word = s.slice(start, i)
//     if (wordSet.has(word)) {
//       const restRes = dfs(i)
//       for (const restWord of restRes) {
//         res.push([word].concat(restWord))  
//       }
//     }
//   }
//   memo[start] = res
//   return res
// }
// return dfs(0).map(item => {
//   return item.join(' ')
// })
// };