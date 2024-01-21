/*
  410. 分割数组的最大值
  给定一个非负整数数组 nums 和一个整数 k ，你需要将这个数组分成 k 个非空的连续子数组。

  设计一个算法使得这 k 个子数组各自和的最大值最小。

  输入：nums = [7,2,5,10,8], k = 2
  输出：18
  解释：
  一共有四种方法将 nums 分割为 2 个子数组。 
  其中最好的方式是将其分为 [7,2,5] 和 [10,8] 。
  因为此时这两个子数组各自的和的最大值为18，在所有情况中最小。

  输入：nums = [1,2,3,4,5], k = 2
  输出：9

  输入：nums = [1,4,4], k = 3
  输出：4
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
  const n = nums.length
  const sum = [0]
  for (let i = 1; i <= n; i++) {
    sum[i] = sum[i - 1] + nums[i - 1]
  }
  const memo = Array.from({ length: n + 1 }, () => new Array(k + 1))
  function dfs(start, times) {
    if (memo[start][times] !== undefined) return memo[start][times]
    if (times + 1 === k) {
      return sum[n] - sum[start]
    }
    let min = Infinity
    for (let i = start; i < n; i++) {
      let t = Math.max(sum[i + 1] - sum[start], dfs(i + 1, times + 1))
      min = Math.min(t, min)
    }
    return memo[start][times] = min
  }
  return dfs(0, 0)
};
const nums = [7,2,5,10,8], k = 2
console.log('splitArray(nums, k)', splitArray(nums, k))