/*
  2765. 最长交替子数组
  给你一个下标从 0 开始的整数数组 nums 。
  如果 nums 中长度为 m 的子数组 s 满足以下条件，我们称它是一个 交替子数组 ：

  m 大于 1 。
  s1 = s0 + 1 。
  下标从 0 开始的子数组 s 与数组 [s0, s1, s0, s1,...,s(m-1) % 2] 一样。
  也就是说，s1 - s0 = 1 ，s2 - s1 = -1 ，s3 - s2 = 1 ，s4 - s3 = -1 ，
  以此类推，直到 s[m - 1] - s[m - 2] = (-1)m 。
  请你返回 nums 中所有 交替 子数组中，最长的长度，如果不存在交替子数组，请你返回 -1 。

  子数组是一个数组中一段连续 非空 的元素序列。

  输入：nums = [2,3,4,3,4]
  输出：4
  解释：交替子数组有 [3,4] ，[3,4,3] 和 [3,4,3,4] 。最长的子数组为 [3,4,3,4] ，长度为4 。

  输入：nums = [4,5,6]
  输出：2
  解释：[4,5] 和 [5,6] 是仅有的两个交替子数组。它们长度都为 2 。

  2 <= nums.length <= 100
  1 <= nums[i] <= 104
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 双层循环
var alternatingSubarray = function(nums) {
  const n = nums.length
  let maxlen = -1
  for (let i = 0; i < n; i++) {
    let temp = 1
    let cur = nums[i]
    let morethan = true
    for (let j = i + 1; j < n; j++) {
      if (morethan) {
        cur = cur + 1
        morethan = false
      } else {
        cur = cur - 1
        morethan = true
      }
      if (nums[j] !== cur) {
        if (temp > maxlen) maxlen = temp
        break
      } else {
        temp++
        if (temp > maxlen) maxlen = temp
      }
    }
  }
  if (maxlen === 1) return -1
  return maxlen
};

// 单层循环
var alternatingSubarray = function(nums) {
  const n = nums.length
  let maxlen = -1
  let firstIndex = 0
  for (let i = 1; i < n; i++) {
    const length = i - firstIndex + 1
    // 长度偶数位 - first === 1(可以用位运算奇数代表)
    // 长度奇数位 - first === 0
    if (nums[i] - nums[firstIndex] === ((length - 1) & 1)) {
      maxlen = Math.max(maxlen, length)
    } else {
    // 不满足,重新判断
      if (nums[i] - nums[i - 1] === 1) {
        firstIndex = i - 1
        maxlen = Math.max(maxlen, 2)
      } else {
        firstIndex = i
      }
    }
  }
  return maxlen
}

const nums = [2,3,4,3,4]
console.log('alternatingSubarray(nums)', alternatingSubarray(nums))