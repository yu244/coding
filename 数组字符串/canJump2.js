/*
  跳跃游戏 II

  给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。
  每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:
  0 <= j <= nums[i] 
  i + j < n
  返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。

  输入: nums = [2,3,1,1,4]
  输出: 2
  跳到最后一个位置的最小跳跃数是 2。
  从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。

  输入: nums = [2,3,0,1,4]
  输出: 2
 
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心
/*
  问题归纳为 比较每一步的最大覆盖范围，历经最小 step 步，可到达终点
  step 在什么情况下 + 1 步 ？
  比如 第 i 阶的 最大覆盖范围 为 i + nums[i]，记作 nextIndex
  那么在 i 到 nextIndex 之间，我们需要考虑下一步能够到达的 最远距离，
  并更新 nextIndex, 当 i 走到 nextIndex 时，将 startIndex 改为 nextIndex 且 step + 1，代表这一步是无法避免的
*/
var jump3 = function(nums) {
  let startIndex = 0
  let nextIndex = 0
  let step = 0
  if (nums.length === 1) return 0
  for (let i = 0; i < nums.length; i++) {
    if (i === nextIndex) {
      startIndex = nextIndex
      step++
    }
    nextIndex = Math.max(nums[i] + i, nextIndex)
  }
  return step
}

// 别人的贪心写法
var jump = function(nums) {
  let res = 0, start = 0, end = 1
  while (end < nums.length) {
    let tempMaxPos = 0
    for (let i = start; i < end; ++i) {
      tempMaxPos = Math.max(i + nums[i], tempMaxPos)
    }
    start = end
    end = tempMaxPos + 1
    ++res
  }
  return res
};

// dp
/*
  计 到达 i 阶台阶的最小跳跃数为 dp[i]
  假设第 j 阶台阶能够到达 i，也就是 （ num[j] + j >= i )时,
  dp[i] = Math.min(dp[j] + 1, dp[i])
*/
var jump2 = function(nums) {
  let n = nums.length
  let dp = new Array(n).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] + j >= i) {
        dp[i] = Math.min(dp[i], dp[j] + 1)
      }
    }
  }
  return dp[n - 1]
}

const nums = [2,3,0,1,4]
console.log('jump3(nums)', jump3(nums))