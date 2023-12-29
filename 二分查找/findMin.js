/*
  寻找旋转排序数组中的最小值

  已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。
  例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
  若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
  若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
  注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]]

  给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。
  请你找出并返回数组中的 最小元素 。

  你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

  输入：nums = [3,4,5,1,2]
  输出：1
  解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。

  输入：nums = [4,5,6,7,0,1,2]
  输出：0
  解释：原数组为 [0,1,2,4,5,6,7] ，旋转 4 次得到输入数组。

  输入：nums = [11,13,15,17]
  输出：11
  解释：原数组为 [11,13,15,17] ，旋转 4 次得到输入数组。
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  const n = nums.length
  let left = 0, right = n - 1, ans = 0
  while (left <= right) {
    let mid = ((right - left) >> 1) + left
    if (nums[mid] > nums[n - 1]) {
      left = mid + 1
      ans = mid + 1
    } else if (nums[mid] < nums[n - 1]) {
      right = mid - 1
    } else {
      return nums[mid]
    }
  }
  return nums[ans]
};
const nums = [11,13,15,17]
console.log('findMin(nums)', findMin(nums))