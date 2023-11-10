/*
  多数元素
  给定一个大小为 n 的数组 nums ，返回其中的多数元素。
  多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

  你可以假设数组是非空的，并且给定的数组总是存在多数元素。
  输入：nums = [3,2,3]
  输出：3
  输入：nums = [2,2,1,1,1,2,2]
  输出：2
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序后除2取整
var majorityElement = function(nums) {
  return nums.sort()[nums.length >> 1]
};
// 摩尔投票
var majorityElement2 = function(nums) {
  let count = 1
  let majority = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === majority) {
      count++
    } else {
      count -= 1
      if (count < 0) {
        majority = nums[i]
        count = 0
      }
    }
  }
  return majority
};

console.log('majorityElement2()', majorityElement2([10,9,9,9,10]))