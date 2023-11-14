/*
  长度最小的子数组

  给定一个含有 n 个正整数的数组和一个正整数 target 。
  找出该数组中满足其总和大于等于 target 的长度最小的 连续子数组 
  [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。
  如果不存在符合条件的子数组，返回 0 。

  输入：target = 7, nums = [2,3,1,2,4,3]
  输出：2
  解释：子数组 [4,3] 是该条件下的长度最小的子数组。

  输入：target = 4, nums = [1,4,4]
  输出：1

  输入：target = 11, nums = [1,1,1,1,1,1,1,1]
  输出：0
*/

// 艹 注意是（大于等于）target，不是等于 target
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let left = 0
  let right = 0
  let sum = 0
  let result = Infinity
  while (right < nums.length) {
    sum = sum + nums[right]
    while (sum >= target && left <= right ) {
      sum = sum - nums[left]
      if ((right - left + 1) < result) {
        result = right - left + 1
      }
      left++
    }
    right++
  }
  return result === Infinity ? 0 : result
};
const target = 11
const nums = [1,2,3,4,5]
console.log('minSubArrayLen', minSubArrayLen(target, nums))
