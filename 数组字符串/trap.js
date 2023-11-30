// 接雨水

/*
  给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

  输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
  输出：6
  解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
  示例 2：

  输入：height = [4,2,0,3,2,5]
  输出：9
*/
/**
 * @param {number[]} height
 * @return {number}
 */
// 求每一列的水，但是超时
var trap2 = function(height) {
  const n = height.length
  let res = 0
  for (let i = 1; i < n - 1; i++) {
    let left_max = 0
    for (let k = i - 1; k >= 0; k--) {
      if (height[k] > left_max) {
        left_max = height[k]
      }
    }
    let right_max = 0
    for (let j = i + 1; j < n; j++) {
      if (height[j] > right_max) {
        right_max = height[j]
      }
    }
    let shortWall = Math.min(left_max, right_max)
    if (shortWall > height[i]) {
      res += shortWall - height[i]
    }
  }
  return res
};
// 左右最高墙优化，复杂度 O(n)
var trap = function(height) {
  let n = height.length
  let left_max = new Array(n).fill(0)
  let right_max = new Array(n).fill(0)
  let left = 0
  let right = 0
  let sum = 0
  for (let i = 1; i < n; i++) {
    if (height[i - 1] > left) {
      left = height[i - 1]
      left_max[i] = height[i - 1]
    } else {
      left_max[i] = left
    }
  }
  for (let j = n - 2; j >= 0; j--) {
    if (height[j + 1] > right) {
      right = height[j + 1]
      right_max[j] = height[j + 1]
    } else {
      right_max[j] = right
    }
  }
  for (let k = 1; k < n - 1; k++) {
    let shortWall = Math.min(left_max[k], right_max[k])
    if (shortWall > height[k]) {
      sum += shortWall - height[k]
    }
  }
  return sum
}

console.log('trap()', trap([4,2,0,3,2,5]))
