/*
  397. 整数替换

  给定一个正整数 n ，你可以做如下操作：

  如果 n 是偶数，则用 n / 2替换 n 。
  如果 n 是奇数，则可以用 n + 1或n - 1替换 n 。
  返回 n 变为 1 所需的 最小替换次数 。

  输入：n = 8
  输出：3
  解释：8 -> 4 -> 2 -> 1

  输入：n = 7
  输出：4
  解释：7 -> 8 -> 4 -> 2 -> 1
  或 7 -> 6 -> 3 -> 2 -> 1

  输入：n = 4
  输出：2
*/
/**
 * @param {number} n
 * @return {number}
 */
// 正常思路走向
var integerReplacement = function(n) {
  const dp = new Map()
  if (n === 1) return 0
  function dfs (num) {
    if (num === 1) return 0
    if (dp.has(num)) return dp.get(num)
    if (num & 1) {
      dp.set(num, 2 + Math.min(dfs(num >> 1), dfs((num >> 1) + 1)))
    } else {
      dp.set(num, 1 + dfs(num >> 1))
    }
    return dp.get(num)
  }
  dfs(n)
  return dp.get(n)
};
// 如果只按题目的奇数处理会超时，得优化一次奇数除2，次数 + 1
var integerReplacement = function(n) {
  const memo = new Map()
  if (n === 1) return 0
  function dfs(num) {
    if (num === 1) return 0
    if (!memo.has(num)) {
      if (num & 1) {
        memo.set(num, 2 + Math.min(dfs((num >> 1) + 1) , dfs(num >> 1)))
      } else {
        memo.set(num, 1 + dfs(num >> 1))
      }
    }
    return memo.get(num)
  }
  dfs(n)
  return memo.get(n)
}

const n = 8
console.log('integerReplacement(n)', integerReplacement(n))