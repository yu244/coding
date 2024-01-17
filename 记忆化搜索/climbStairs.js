/*
  70. 爬楼梯
  假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

  每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

  输入：n = 2
  输出：2
  解释：有两种方法可以爬到楼顶。
  1. 1 阶 + 1 阶
  2. 2 阶
  示例 2：

  输入：n = 3
  输出：3
  解释：有三种方法可以爬到楼顶。
  1. 1 阶 + 1 阶 + 1 阶
  2. 1 阶 + 2 阶
  3. 2 阶 + 1 阶

  1 <= n <= 45
*/
const inf = -1 
const h = new Array(46).fill(inf)
var climbStairs = function(n) {
  if (n === 1) return 1
  if (n === 2) return 2
  if (h[n] !== inf) return h[n]
  h[n] = climbStairs(n - 2) + climbStairs(n - 1)
  return h[n]
};


var climbStairs = function(n) {
  const dp = new Array(n + 1)
  dp[1] = 1
  dp[2] = 2
  for (let i = 2; i < n + 1; i++) {
    dp[i] = dp[i - 2] + dp[i - 1]
  }
  return dp[n]
}