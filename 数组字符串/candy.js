/*
分发糖果
  n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。

  你需要按照以下要求，给这些孩子分发糖果：

  每个孩子至少分配到 1 个糖果。
  相邻两个孩子评分更高的孩子会获得更多的糖果。
  请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。

  示例 1：

  输入：ratings = [1,0,2]
  输出：5
  解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。

  示例 2：
  输入：ratings = [1,2,2]
  输出：4
  解释：你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。
      第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。
*/

/**
 * @param {number[]} ratings
 * @return {number}
 */
// 顺序遍历一次 倒序遍历一次
var candy = function(ratings) {
  const n = ratings.length
  const left = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    if (i > 0 && ratings[i] > ratings[i - 1]) {
      left[i] = left[i - 1] + 1
    } else {
      left[i] = 1
    }
  }
  // 单个变量记录右规则
  let right = 0, ret = 0
  for (let j = n - 1; j >= 0; j--) {
    if (j < n - 1 && ratings[j] > ratings[j + 1]) {
      right++
    } else {
      right = 1
    }
    ret += Math.max(left[j], right)
  }
  return ret
}

const ratings = [1,2,87,87,87,2,1]
console.log('candy(ratings)', candy(ratings))
