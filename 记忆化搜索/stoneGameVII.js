/*
  1690. 石子游戏 VII

  石子游戏中，爱丽丝和鲍勃轮流进行自己的回合，爱丽丝先开始 。

  有 n 块石子排成一排。每个玩家的回合中，可以从行中 移除 最左边的石头或最右边的石头，
  并获得与该行中剩余石头值之 和 相等的得分。当没有石头可移除时，得分较高者获胜。

  鲍勃发现他总是输掉游戏（可怜的鲍勃，他总是输），所以他决定尽力 减小得分的差值 。
  爱丽丝的目标是最大限度地 扩大得分的差值 。

  给你一个整数数组 stones ，其中 stones[i] 表示 从左边开始 的第 i 个石头的值，
  如果爱丽丝和鲍勃都 发挥出最佳水平 ，请返回他们 得分的差值 。

  输入：stones = [5,3,1,4,2]
  输出：6
  解释：  
  - 爱丽丝移除 2 ，得分 5 + 3 + 1 + 4 = 13 。游戏情况：爱丽丝 = 13 ，鲍勃 = 0 ，石子 = [5,3,1,4] 。
  - 鲍勃移除 5 ，得分 3 + 1 + 4 = 8 。游戏情况：爱丽丝 = 13 ，鲍勃 = 8 ，石子 = [3,1,4] 。
  - 爱丽丝移除 3 ，得分 1 + 4 = 5 。游戏情况：爱丽丝 = 18 ，鲍勃 = 8 ，石子 = [1,4] 。
  - 鲍勃移除 1 ，得分 4 。游戏情况：爱丽丝 = 18 ，鲍勃 = 12 ，石子 = [4] 。
  - 爱丽丝移除 4 ，得分 0 。游戏情况：爱丽丝 = 18 ，鲍勃 = 12 ，石子 = [] 。
  得分的差值 18 - 12 = 6 。

  输入：stones = [7,90,5,1,100,10,10,2]
  输出：122
*/
/**
 * @param {number[]} stones
 * @return {number}
 */
/*
  1690. 石子游戏 VII
  前缀和
  前缀和 s[0] = 0，可以用前缀和计算两端点之间的和
  例如 [1, 2, 3] 对应前缀和 s = [0, 1, 3, 6]
  [1, 2, 3]   之间的和 为 s[3] - s[0] === 6
  [2, 3]      之间的和 为 s[3] - s[1] === 5 
  任意子数组都可以表示为前缀和的差值
  
  寻找子问题
  假设 stones = [5,3,1,4,2], 枚举 alice 第一回合的选择
  1. alice 移除 stone[0]，剩余石子 [3,1,4,2]中 bob 怎么选能让 bob 的得分减去 alice 后手的得分最大是多少（缩小差距）
  1. alice 移除 stone[4]，剩余石子 [5,3,1,4]中 bob 怎么选能让 bob 的得分减去 alice 后手的得分最大是多少（缩小差距）

  alice 的两个枚举也是在得出自己先手bob后手最大得分差（扩大差距）
  假设 alice 移除 stone[4] 的总得分为 A，bob的总得分为 B
  得分差 dfs(0, 4) = A - B
  在 bob 总得分 B 的基础上，设 alice 下一次选的总得分为 A'
  得分差 dfs(0, 3) = B - A'
  由于 A 总得分 = A' + pt[4](0 到 3 的子数组和)
  即 A' = A - pt[4]
  即 dfs(0, 3) = B - A + pt[4]
  dfs(0, 4) + dfs(0, 3) = pt[4]
  dfs(0, 4) = pt[4] - dfs(0, 3)

  得出状态转移方程
  dfs(i, j) = Math.max(s[j + 1] - s[i + 1] - dfs(i + 1, j), s[j] - s[i] - dfs(i, j - 1))
  超时加记忆化
*/
var stoneGameVII = function(stones) {
  const n = stones.length
  const s = new Array()
  s[0] = 0
  for (let i = 1; i <= n; i++) {
    s[i] = s[i - 1] + stones[i - 1]
  }
  function dfs (i, j) {
    if (i === j) return 0
    return Math.max(s[j + 1] - s[i + 1] - dfs(i + 1, j), s[j] - s[i] - dfs(i, j - 1))
  }
  return dfs(0, n - 1)
};
// 记忆化
var stoneGameVII = function(stones) {
  const n = stones.length
  const s = new Array()
  const memo = Array.from({ length: n }, () => new Array(n).fill(-1))
  s[0] = 0
  for (let i = 1; i <= n; i++) {
    s[i] = s[i - 1] + stones[i - 1]
  }
  function dfs (i, j) {
    if (memo[i][j] !== -1) return memo[i][j]
    if (i === j) return memo[i][j] = 0
    return memo[i][j] = Math.max(s[j + 1] - s[i + 1] - dfs(i + 1, j), s[j] - s[i] - dfs(i, j - 1))
  }
  return dfs(0, n - 1)
}

const stones = [5,3,1,4,2]
console.log('stoneGameVII(stones)', stoneGameVII(stones))