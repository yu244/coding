/*
  假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
  每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
  输入：n = 2
  输出：2

  输入：n = 3
  输出：3
*/

/*
  分析
  对于第 i 个台阶，计有 dp[i] 种方法到达
  状态转移方程 dp[i] = dp[i - 2] + d[i - 1]
  
*/
var climbStairs = function(n) {
  const dp = new Array(n + 1).fill(0)
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1]
  }
  return dp[n]
};

console.log(climbStairs(1))
