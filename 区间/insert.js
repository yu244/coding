/*
  插入区间
  
  给你一个 无重叠的 ，按照区间起始端点排序的区间列表。

  在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

  输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
  输出：[[1,5],[6,9]]

  输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
  输出：[[1,2],[3,10],[12,16]]
  解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。

  输入：intervals = [], newInterval = [5,7]
  输出：[[5,7]]

  输入：intervals = [[1,5]], newInterval = [2,3]
  输出：[[1,5]]

  输入：intervals = [[1,5]], newInterval = [2,7]
  输出：[[1,7]]
*/
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let n = intervals.length
  let res = []
  let i = 0
  // 左边不重叠
  while (i < n && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i])
    i++
  }
  // 重叠部分,绿区间的左端 <= 蓝区间的右端 代表最后一个重叠块
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0])
    newInterval[1] = Math.max(newInterval[1], intervals[i][1])
    i++
  }
  res.push(newInterval)
  // 右边不重叠部分
  while (i < n) {
    res.push(intervals[i])
    i++
  }
  return res
};

const intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
console.log('insert()', insert(intervals, newInterval))