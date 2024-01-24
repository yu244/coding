/*
  2865. 美丽塔 I

  给你一个长度为 n 下标从 0 开始的整数数组 maxHeights 。

  你的任务是在坐标轴上建 n 座塔。第 i 座塔的下标为 i ，高度为 heights[i] 。

  如果以下条件满足，我们称这些塔是 美丽 的：

  1 <= heights[i] <= maxHeights[i]
  heights 是一个 山脉 数组。
  如果存在下标 i 满足以下条件，那么我们称数组 heights 是一个 山脉 数组：

  对于所有 0 < j <= i ，都有 heights[j - 1] <= heights[j]
  对于所有 i <= k < n - 1 ，都有 heights[k + 1] <= heights[k]
  请你返回满足 美丽塔 要求的方案中，高度和的最大值 。

  输入：maxHeights = [5,3,4,1,1]
  输出：13
  解释：和最大的美丽塔方案为 heights = [5,3,3,1,1] ，这是一个美丽塔方案，因为：
  - 1 <= heights[i] <= maxHeights[i]  
  - heights 是个山脉数组，峰值在 i = 0 处。
  13 是所有美丽塔方案中的最大高度和。

  输入：maxHeights = [6,5,3,9,2,7]
  输出：22
  解释： 和最大的美丽塔方案为 heights = [3,3,3,9,2,2] ，这是一个美丽塔方案，因为：
  - 1 <= heights[i] <= maxHeights[i]
  - heights 是个山脉数组，峰值在 i = 3 处。
  22 是所有美丽塔方案中的最大高度和。

  输入：maxHeights = [3,2,5,5,2,3]
  输出：18
  解释：和最大的美丽塔方案为 heights = [2,2,5,5,2,2] ，这是一个美丽塔方案，因为：
  - 1 <= heights[i] <= maxHeights[i]
  - heights 是个山脉数组，最大值在 i = 2 处。
  注意，在这个方案中，i = 3 也是一个峰值。
  18 是所有美丽塔方案中的最大高度和。
*/
/**
 * @param {number[]} maxHeights
 * @return {number}
 */
// var maximumSumOfHeights = function(nums) {
//   const n = nums.length
//   let res = 0
//   for (let x = 0; x < n; x++) {
//     let maxNum = nums[x]
//     let sum = 0
//     // 左侧
//     for (let i = x - 1; i >= 0; i--) {
//       if (nums[i] <= maxNum) {
//         sum = sum + nums[i]
//         maxNum = nums[i]
//       } else {
//         sum = sum + maxNum
//       }
//     }
//     // 右侧
//     maxNum = nums[x]
//     for (let j = x; j < n; j++) {
//       if (nums[j] <= maxNum) {
//         sum = sum + nums[j]
//         maxNum = nums[j]
//       } else {
//         sum = sum + maxNum
//       }
//     }
//     res = Math.max(sum, res)
//   }
//   return res
// };

// var maximumSumOfHeights = function(maxHeights) {
//   const n = maxHeights.length;
//   const prefix = new Array(n).fill(0);
//   const suffix = new Array(n).fill(0);
//   const stack1 = [];
//   const stack2 = [];
//   for (let i = 0; i < n; i++) {
//       while (stack1.length > 0 && maxHeights[i] < maxHeights[stack1[stack1.length - 1]]) {
//           stack1.pop();
//       }
//       if (stack1.length == 0) {
//           prefix[i] = (i + 1) * maxHeights[i];
//       } else {
//           let last = stack1[stack1.length - 1];
//           prefix[i] = prefix[last] + (i - last) * maxHeights[i]
//       }
//       stack1.push(i);
//   }

//   let res = 0;
//   for (let i = n - 1; i >= 0; i--) {
//       while (stack2.length && maxHeights[i] < maxHeights[stack2[stack2.length - 1]]) {
//           stack2.pop();
//       }
//       if (stack2.length == 0) {
//           suffix[i] = (n - i) * maxHeights[i];
//       } else {
//           last = stack2[stack2.length - 1];
//           suffix[i] = suffix[last] + (last - i) * maxHeights[i];
//       }
//       stack2.push(i);
//       res = Math.max(res, prefix[i] + suffix[i] - maxHeights[i])
//   }                
//   return res;
// };


var maximumSumOfHeights = function(maxHeights) {
  const n = maxHeights.length
  const prefix = new Array(n).fill(0)
  const suffix = new Array(n).fill(0)
  const stack1 = []
  const stack2 = []
  let res = 0
  for (let i = 0; i < n; i++) {
    while (stack1.length > 0 && maxHeights[i] < maxHeights[stack1[stack1.length - 1]]) {
      stack1.pop()
    }
    if (stack1.length === 0) {
      prefix[i] = (i + 1) * maxHeights[i]
    } else {
      let last = stack1[stack1.length - 1]
      prefix[i] = prefix[last] + (i - last) * maxHeights[i]
    }
    stack1.push(i)
  }
  for (let j = n - 1; j >= 0; j--) {
    while (stack2.length > 0 && maxHeights[j] < maxHeights[stack2[stack2.length - 1]]) {
      stack2.pop()
    }
    if (stack2.length === 0) {
      suffix[j] = (n - j) * maxHeights[j]
    } else {
      let last = stack2[stack2.length - 1]
      suffix[j] = suffix[last] + (last - j) * maxHeights[j]
    }
    stack2.push(j)
    res = Math.max(prefix[j] + suffix[j] - maxHeights[j], res)
  }
  return res
}

const maxHeights = [3,6,3,5,5,1,2,5,5,6,2,2]
console.log('maximumSumOfHeights(maxHeights)', maximumSumOfHeights(maxHeights))