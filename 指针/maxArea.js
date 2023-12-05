/*
  盛最多水的容器

  给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

  找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

  返回容器可以储存的最大水量。

  说明：你不能倾斜容器。

  输入：[1,8,6,2,5,4,8,3,7]
  输出：49 
  解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

  输入：height = [1,1]
  输出：1
*/

/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针，移动较小的一根试图找到最大的
var maxArea = function(height) {
  let n = height.length
  let left = 0
  let right = n - 1
  let res = 0
  let shorter
  while (left < right) {
    shorter = Math.min(height[left], height[right])
    res = Math.max((right - left) * (shorter), res)
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return res
};
console.log('maxArea()', maxArea([1,8,6,2,5,4,8,3,7]))