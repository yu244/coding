/*
  存在重复元素 II

  给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。
  如果存在，返回 true ；否则，返回 false 。

  输入：nums = [1,2,3,1], k = 3
  输出：true

  输入：nums = [1,0,1,1], k = 1
  输出：true

  输入：nums = [1,2,3,1,2,3], k = 2
  输出：false
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// hash表
var containsNearbyDuplicate = function(nums, k) {
  let nMap = {}
  for (let i = 0; i < nums.length; i++) {
    if (nMap[nums[i]] === undefined) {
      nMap[nums[i]] = i
    } else {
      if (i - nMap[nums[i]] <= k) {
        return true
      } else {
        nMap[nums[i]] = i
      }
    }
  }
  return false
};

// 两层循环
// 测试用例 k = 35000 超时
var containsNearbyDuplicate2 = function(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + k; j++) {
      if (nums[i] === nums[j]) return true
    }    
  }
  return false
};


const nums = [1,2,3,1], k = 3
console.log('containsNearbyDuplicate(nums, k)', containsNearbyDuplicate(nums, k))