/*
  在排序数组中查找元素的第一个和最后一个位置

  给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。
  请你找出给定目标值在数组中的开始位置和结束位置。

  如果数组中不存在目标值 target，返回 [-1, -1]。

  你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

  输入：nums = [5,7,7,8,8,10], target = 8
  输出：[3,4]

  输入：nums = [5,7,7,8,8,10], target = 6
  输出：[-1,-1]

  输入：nums = [], target = 0
  输出：[-1,-1]
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {  
  const n = nums.length
  let left = 0, right = n - 1, first = n, last = n
  while (left <= right) {
    let mid = ((right - left) >> 1) + left
    if (target <= nums[mid]) {
      right = mid - 1
      first = mid
    } else {
      left = mid + 1
    }
  }
  if (nums[first] !== target) return [-1, -1]
  left = first, right = n - 1
  while (left <= right) {
    let mid = ((right - left) >> 1) + left
    if (target < nums[mid]) {
      right = mid - 1
    } else if (target >= nums[mid]) {
      left = mid + 1
      last = mid
    }
  }
  return [first, last]
};

const nums = [], target = 8
console.log('searchRange(nums, target)', searchRange(nums, target))