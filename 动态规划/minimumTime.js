/*
  高难
  2809. 使数组和小于等于 x 的最少时间

  给你两个长度相等下标从 0 开始的整数数组 nums1 和 nums2 。
  每一秒，对于所有下标 0 <= i < nums1.length ，nums1[i] 的值都增加 nums2[i] 。操作 完成后 ，你可以进行如下操作：

  选择任一满足 0 <= i < nums1.length 的下标 i ，并使 nums1[i] = 0 。
  同时给你一个整数 x 。
  请你返回使 nums1 中所有元素之和 小于等于 x 所需要的 最少 时间，如果无法实现，那么返回 -1 。


  输入：nums1 = [1,2,3], nums2 = [1,2,3], x = 4
  输出：3
  解释：
  第 1 秒，我们对 i = 0 进行操作，得到 nums1 = [0,2+2,3+3] = [0,4,6] 。
  第 2 秒，我们对 i = 1 进行操作，得到 nums1 = [0+1,0,6+3] = [1,0,9] 。
  第 3 秒，我们对 i = 2 进行操作，得到 nums1 = [1+1,0+2,0] = [2,2,0] 。
  现在 nums1 的和为 4 。不存在更少次数的操作，所以我们返回 3 。

  输入：nums1 = [1,2,3], nums2 = [3,3,3], x = 4
  输出：-1
  解释：不管如何操作，nums1 的和总是会超过 x 。
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} x
 * @return {number}
 */
var minimumTime = function(nums1, nums2, x) {
  const n = nums1.length
  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0))
  const nums = nums1.map((a, i) => ({ a: a, b: nums2[i] }))
  nums.sort((a, b) => a.b - b.b)

  for (let i = 1; i <= n; i++) {
    const { a, b } = nums[i - 1]
    for (let j = i; j > 0; j--) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + a + b * j)
    }    
  }

  const sum1 = nums1.reduce((a, b) => a + b)
  const sum2 = nums2.reduce((a, b) => a + b)
  for (let i = 0; i <= n; i++) {
    if (sum2 * i + sum1 - dp[n][i] <= x) {
      return i
    }
  }
  return -1
};

const nums1 = [1, 4, 3], nums2 = [1, 4, 3], x = 4
console.log('minimumTime(nums1, nums2, x)', minimumTime(nums1, nums2, x))
/*
  假设 j 次操作什么都不置零，那么 元素和 === sum1 + (sum2 * j)
  假设 j 次操作有置零操作，记 dp[i][j] 为 有 i 个元素 j 次操作 能够拿来置零(减少) 的最大值 
  那么 最小的元素和 就是 sum1 + (sum2 * j) - dp[i][j]
  现在只需要求出 dp[i][j] 的最大值是多少（第 i 个元素 j 次操作能最大减少多少）

  由于每次都加上 num2[i]，所以对 num2 中越大的元素置 0 能减少的最大总值最大，有必要对 num2 进行排序(且要和num1对应位置)

  状态转移方程
  dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + num1[i - 1] + num2[i - 1] * j)

  其中

*/
const num3 = [1, 2, 3], num4 = [3, 3, 3], y = 4
