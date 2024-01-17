/*
  斐波那契
  但是记忆化搜索

  F(0) = 0
  F(1) = 1
  F(n) = F(n - 1) + F(n - 2)
  0 <= n <= 100

  通过数组引用存储上一步计算过的值,将递归过程中右子树计算过的枝剪

  记忆化搜索其实是 dfs 结合了 dp
*/
const inf = -1
const h = new Array(101).fill(inf)
const MOD = 1e9 + 7
var fib = function (n) {
  if (n === 0) return 0
  if (n === 1) return 1
  if (h[n] !== inf) return h[n]
  h[n] = (fib(n - 2) + fib(n - 1)) % MOD
  return h[n] 
}

var fib = function (n) {
  const MOD = 1e9 + 7
  const dp = new Array(n + 1)
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    let res = dp[i - 2] + dp[i - 1]
    if (res > MOD) {
      res = res % MOD
    }
    dp[i] = res
  }
  return dp[n]
}