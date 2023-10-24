/*
  给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
  输入：nums = [10,9,2,5,3,7,101,18]
  输出：4
  解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。

  输入：nums = [0,1,0,3,2,3]
  输出：4
*/




// 动态规划
/*
  将问题转化为以每个元素为结尾的最长递增子序列
  记以 dp[i] 为第 i 个元素为结尾的最长递增子序列长度
  初始状态：依据题目约束，每个元素可以以自身为一个递增子序列，因此初始状态 dp[i] = 1
  状态转移方程: 对于第 i 个元素，我们需要找到所有比他 小 的元素，并且取他们的最大递增子序列长度上 加上 1
  因此 状态转移方程为： dp[i] = max(dp[i], dp[j] + 1), 其中 0 <= j < i
*/
 var lengthOfLIS = function (nums) {
  const n = nums.length
  const dp = new Array(n).fill(1)
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  return Math.max(...dp)
 }


const nums = [0,1,0,3,2,3]
console.log(lengthOfLIS(nums))


// 递归方法会超时....
var recursion = function(nums) {
  const len = nums.length
  let result = 0
  function helper(cur, arr) {
    for (let i = cur; i < nums.length; i++) {
      if (arr.length + (nums.length - i) < result ) {
        break
      }
      if (arr.length === 0) {
        const newArr = arr.concat(nums[i])
        if (newArr.length > result) {
          result = newArr.length
        }
        helper(i + 1, newArr)
      }
      if (nums[i] > arr[arr.length - 1]) {
        const newArr = arr.concat(nums[i])
        if (newArr.length > result) {
          result = newArr.length
        }
        helper(i + 1, newArr)
      }
    }
  }
  helper(0, [])
  return result
};