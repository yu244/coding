/*
  旋转轮组
  给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
  输入: nums = [1,2,3,4,5,6,7], k = 3
  输出: [5,6,7,1,2,3,4]
  解释:
  向右轮转 1 步: [7,1,2,3,4,5,6]
  向右轮转 2 步: [6,7,1,2,3,4,5]
  向右轮转 3 步: [5,6,7,1,2,3,4]
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let temp
  while (k > 0) {
    k--
    temp = nums.pop()
    nums.unshift(temp)
  }
  console.log('nums', nums)
};

var rotate2 = function(nums, k) {
  k %= nums.length
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
  console.log('nums', nums)
}

function reverse (nums, start, end) {
  while (start < end) {
    [nums[start++], nums[end--]] = [nums[end], nums[start]]
  }
}

const nums = [1,2,3,4,5,6,7]
const k = 3
rotate2(nums, k)