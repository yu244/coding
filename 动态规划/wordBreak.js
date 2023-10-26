/*
  给你一个字符串 s 和一个字符串列表 wordDict 作为字典。
  请你判断是否可以利用字典中出现的单词拼接出 s 。
  输入: s = "leetcode", wordDict = ["leet", "code"]
  输出: true
  解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。

  输入: s = "applepenapple", wordDict = ["apple", "pen"]
  输出: true
  解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
  注意，你可以重复使用字典中的单词。
*/

/*
  分析
  动态规划，对于给定字符串第 i 个字符位置能否切割记作 dp[i] = true | false
  对于第 j 个字符位置能否切割记作 dp[j] = true | false
  如果 dp[j] === true 能被切割，且 字符串（i - j）在 wordDict 中存在，则 dp[i] = true

*/

var wordBreak = function(s, wordDict) {
  const len = s.length
  const dp = new Array(len + 1).fill(false)
  dp[0] = true
  for (let i = 1; i < len + 1; i++) {
    for(let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true
      }
    }
  }
  return dp[len]
};

const s = "catsandog"
const wordDict = ["cats","dog","sand","and","cat"]
console.log(wordBreak(s, wordDict))