/*
  1696. 跳跃游戏 VI
  给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。

  一开始你在下标 0 处。每一步，你最多可以往前跳 k 步，但你不能跳出数组的边界。
  也就是说，你可以从下标 i 跳到 [i + 1， min(n - 1, i + k)] 包含 两个端点的任意位置。

  你的目标是到达数组最后一个位置（下标为 n - 1 ），你的 得分 为经过的所有数字之和。

  请你返回你能得到的 最大得分 。

  输入：nums = [1,-1,-2,4,-7,3], k = 2
  输出：7
  解释：你可以选择子序列 [1,-1,4,3] （上面加粗的数字），和为 7 。

  输入：nums = [10,-5,-2,4,0,3], k = 3
  输出：17
  解释：你可以选择子序列 [10,4,3] （上面加粗数字），和为 17 。

  输入：nums = [1,-5,-20,4,-1,3,-6,-3], k = 2
  输出：0
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
  dfs(i) = max(dfs(j)) + nums[i]
  超时
*/
var maxResult = function(nums, k) {
  const n = nums.length
  function dfs (i) {
    if (i === 0) return nums[0]
    let max = -Infinity
    for (let j = Math.max(0, i - k); j < i; j++) {
      max = Math.max(max, dfs(j))
    }
    return max + nums[i]
  }
  return dfs(n - 1)
};
/*
  双端队列
  清一轮保证队列可选范围
  操作dp
  清一轮保证单调
*/
var maxResult = function(nums, k) {
  const n = nums.length
  const queue = new Array()
  queue[0] = 0
  const dp = new Array(n).fill(0)
  dp[0] = nums[0]
  for (let i = 1; i < n; i++) {
    while (queue.length > 0 && queue[0] < i - k) {
      queue.shift()
    }
    dp[i] = dp[queue[0]] + nums[i]
    while (queue.length > 0 &&  dp[queue[queue.length - 1]] <= dp[i]) {
      queue.pop()
    }
    queue.push(i)
  }
  return dp[n - 1]
}
const nums = [10,-5,-2,4,0,3], k = 3
console.log('maxResult(nums, k)', maxResult(nums, k))
