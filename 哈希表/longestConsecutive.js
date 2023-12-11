/*
  最长连续序列

  给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

  请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

  输入：nums = [100,4,200,1,3,2]
  输出：4
  解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

  输入：nums = [0,3,7,2,5,8,4,6,0,1]
  输出：9
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 靠 set 去重（保证O(n)的重要条件），在 for 和 while 中判断有无前序数（即当前为序列的第一个数）， 复杂度 O(n) ...
var longestConsecutive = function(nums) {
  // let nSet = new Set([...nums])
  let nSet = new Set()
  for (const item of nums) {
    nSet.add(item)
  }
  let res = 0
  for (let num of nSet) {
    if (!nSet.has(num - 1)) {
      let curNum = num
      let cur = 1
      while (nSet.has(curNum + 1)) {
        cur += 1
        curNum += 1
      }
      res = Math.max(res, cur)
    }
  }
  return res
};

const nums = [0,0,-1]
console.log('longestConsecutive(nums)', longestConsecutive(nums))