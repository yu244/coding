/*
  139. 单词拆分
  给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。

  注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

  输入: s = "leetcode", wordDict = ["leet", "code"]
  输出: true
  解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。

  输入: s = "applepenapple", wordDict = ["apple", "pen"]
  输出: true
  解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
      注意，你可以重复使用字典中的单词。

  输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
  输出: false
  
  1 <= s.length <= 300
  1 <= wordDict.length <= 1000
  1 <= wordDict[i].length <= 20
  s 和 wordDict[i] 仅由小写英文字母组成
  wordDict 中的所有字符串 互不相同

*/
// 一时间没想起来dp,先写dp好了
// 假设 位置 j 能被分割,那么下一个能被分割的点 s[i 到 j] 如果在字典中存在的话 dp[i] 也是有效值 
// var wordBreak = function(s, wordDict) {
//   const hash = new Map()
//   for (const str of wordDict) {
//     hash.set(str, true)
//   }
//   const dp = new Array(s.length + 1).fill(false)
//   dp[0] = true
//   for (let i = 1; i <= s.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (dp[j] && hash.get(s.substring(j, i))) {
//         dp[i] = true
//       }
//     }    
//   }
//   return dp[s.length]
// };



// BFS
// 普通BFS超时
// 每次多一位分割,如果剩余的能顺利分割完返回真
var wordBreak = function(s, wordDict) {
  const hash = new Map()
  for (const item of wordDict) {
    hash.set(item, true)
  }
  let res = false
  function bfs (str) {
    if (res === true || hash.has(str)) {
      res = true
      return
    }
    for (let i = 1; i < str.length; i++) {
      if (hash.has(str.substring(0, i))) {
        bfs(str.slice(i))
      }
    }
  }
  bfs(s)
  return res
}

// DFS 回溯
// 普通DFS超时
// 记录 start 判断
var wordBreak = function(s, wordDict) {
  const len = s.length
  const set = new Set(wordDict)
  function dfs (start) {
    if (start === len) {
      return true
    }
    for (let i = start + 1; i <= len; i++) {
      // 如果切出的字符串存在,且剩余子串能被切割
      if (set.has(s.slice(start, i)) && dfs(i)) {
        return true
      }
    }
    return false
  }
  return dfs(0)
}


/*
  s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
  wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
  dfs分支太多,需要数组记录之前判断过的状态,如果命中直接返回
*/
var wordBreak = function(s, wordDict) {
  const len = s.length
  const set = new Set(wordDict)
  const memo = new Array(len)
  function dfs(start) {
    if (start === len) return true
    if (memo[start] !== undefined) return memo[start]
    for (let i = start + 1; i <= len; i++) {
      if (set.has(s.slice(start, i)) && dfs(i)) {
        memo[i] = true
        return true
      }
    }
    memo[start] = false
    return false
  }
  return dfs(0)
}
const s = "leetcode", wordDict = ["leet","code"]
wordBreak(s, wordDict)