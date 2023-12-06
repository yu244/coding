/*
  给你一个整数数组 nums ，判断
  是否存在三元组 [nums[i], nums[j], nums[k]] 
  满足          i != j、i != k 且 j != k ，
  同时还满足     nums[i] + nums[j] + nums[k] == 0 。

  请你返回所有和为 0 且不重复的三元组。

  注意：答案中不可以包含重复的三元组。

  输入：nums = [-1,0,1,2,-1,-4]
  输出：[[-1,-1,2],[-1,0,1]]
  解释：
  nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
  nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
  nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
  不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
  注意，输出的顺序和三元组的顺序并不重要。

  输入：nums = [0,1,1]
  输出：[]
  解释：唯一可能的三元组和不为 0 。

  输入：nums = [0,0,0]
  输出：[[0,0,0]]
  解释：唯一可能的三元组和为 0 。
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  let L
  let R
  let res = []
  let temp
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) break
    L = i + 1
    R = n - 1
    if (nums[i] === nums[i - 1]) continue
    while (L < R && nums[R] >= 0) {
      temp = nums[i] + nums[L] + nums[R]
      if (temp === 0) {
        res.push([nums[i], nums[L] , nums[R]])
        while (L < R && nums[L] === nums[L + 1]) L++
        while (L < R && nums[R] === nums[R - 1]) R--
        L++
        R--
      }
      else if (temp > 0) R--
      else if (temp < 0) L++
    }
  }
  return res
};

const nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4]
console.log('threeSum(nums)', threeSum(nums))