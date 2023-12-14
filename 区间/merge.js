/*
  合并区间

  以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
  请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

  输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
  输出：[[1,6],[8,10],[15,18]]
  解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

  输入：intervals = [[1,4],[4,5]]
  输出：[[1,5]]
  解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 注意测试用例是乱序 并不是例子给的升序
var merge = function(intervals) {
  let n = intervals.length
  if (n < 2) {
    return intervals
  }
  intervals.sort((a, b) => a[0] - b[0])
  let temp = [...intervals[0]]
  let res = new Array()
  for (let i = 1; i < n; i++) {
    if (
        (intervals[i][0] >= temp[0] && intervals[i][0] <= temp[1]) || 
        (intervals[i][1] >= temp[0] && intervals[i][1] <= temp[1]) ||
        (temp[0] >= intervals[i][0] && temp[0] <= intervals[i][1]) ||
        (temp[1] >= intervals[i][0] && temp[1] <= intervals[i][1])
      ) {
      temp[0] = Math.min(intervals[i][0], temp[0])
      temp[1] = Math.max(intervals[i][1], temp[1])
    } else {
      res.push([...temp])
      temp[0] = intervals[i][0]
      temp[1] = intervals[i][1]
    }
    if (i === n - 1) res.push([...temp])
  }
  return res
};

const intervals = [[2,3],[4,5],[6,7],[8,9],[1,10]]
console.log('merge(intervals)', merge(intervals))