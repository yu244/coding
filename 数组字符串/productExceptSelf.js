/*
  除自身以外数组的乘积

  给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

  题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

  请 不要使用除法，且在 O(n) 时间复杂度内完成此题。

  输入: nums = [1,2,3,4]
  输出: [24,12,8,6]

  输入: nums = [-1,1,0,-3,3]
  输出: [0,0,9,0,0]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let left = 1
  let right = 1
  const res = []
  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      left = left * nums[i - 1]
    }
    res[i] = left
  }
  for (let j = nums.length - 1; j >= 0 ; j--) {
    if (j < nums.length - 1) {
      right = right * nums[j + 1]
    }
    res[j] *= right
  }
  return res
};

productExceptSelf([0, 0])