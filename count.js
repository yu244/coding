/*
  统计整数数目

  给你两个数字字符串 num1 和 num2 ，以及两个整数 max_sum 和 min_sum 。
  如果一个整数 x 满足以下条件，我们称它是一个好整数：

  num1 <= x <= num2
  min_sum <= digit_sum(x) <= max_sum.
  请你返回好整数的数目。答案可能很大，请返回答案对 109 + 7 取余后的结果。

  注意，digit_sum(x) 表示 x 各位数字之和。

  输入：num1 = "1", num2 = "12", min_num = 1, max_num = 8
  输出：11
  解释：总共有 11 个整数的数位和在 1 到 8 之间，分别是 1,2,3,4,5,6,7,8,10,11 和 12 。所以我们返回 11 。

  输入：num1 = "1", num2 = "5", min_num = 1, max_num = 5
  输出：5
  解释：数位和在 1 到 5 之间的 5 个整数分别为 1,2,3,4 和 5 。所以我们返回 5 。
  
  提示：

  1 <= num1 <= num2 <= 1022
  1 <= min_sum <= max_sum <= 400

  dp[i] = 
*/
/**
 * @param {string} num1
 * @param {string} num2
 * @param {number} min_sum
 * @param {number} max_sum
 * @return {number}
 */
var count = function(num1, num2, min_sum, max_sum) {
  const MOD = 1e9 + 7
  const ASCII0 = '0'.charCodeAt(0)
  const ans = calc(num2) - calc(num1) + MOD + isValid(num1)
  return ans % MOD

  // 判断单个数是否合法
  function isValid (num) {
    let res = 0
    for (let i = 0; i < num.length; i++) {
      res += num.charCodeAt(i) - ASCII0      
    }
    return res >= min_sum && res <= max_sum ? 1 : 0
  }

  // 获取 num 以内合法数量
  function calc (s) {
    const n = s.length
    const memo = new Array(n)
    for (let i = 0; i < memo.length; i++) {
      // 每一位的记忆化存储上限是 9n 或者 max_sum，因为超过 max_sum 就过滤掉了
      // 直接记忆在 sum 位，所以 +1
      memo[i] = new Array(Math.min(9 * n, max_sum) + 1).fill(-1)    
    }
    console.log('memo', memo)
    // 第一位一定是 limit 的
    return dfs(s, memo, 0, 0, true)
  }

  // 从数字第 i 位开始计算满足条件的 count
  function dfs (s, memo, i, sum, isLimit) {
    // 递归求和超过上限，停止
    if (sum > max_sum) return 0

    // 递归求和到最后以为，满足条件返回 1 值
    if (i === s.length) return sum >= min_sum ? 1 : 0

    // 记忆化存储
    if (!isLimit && memo[i][sum] !== -1) return memo[i][sum]
    // 累加和
    let res = 0
    // 当前位上限
    const up = isLimit ? s.charCodeAt(i) - ASCII0 : 9
    // 每句当前可填数字
    for (let j = 0; j <= up; j++) {
      res = (res + dfs(s, memo, i + 1, sum + j, isLimit && j === up)) % MOD    
    }

    if (!isLimit) memo[i][sum] = res
    return res
  }

}
const num1 = "4179205230"
const num2 = "7748704426"
const min_sum = 8
const max_sum = 46
console.log('count()', count(num1, num2, min_sum, max_sum))