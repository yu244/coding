/*
  直线上最多的点数

  给你一个数组 points ，其中 points[i] = [xi, yi] 表示 X-Y 平面上的一个点。
  求最多有多少个点在同一条直线上。

  输入：points = [[1,1],[2,2],[3,3]]
  输出：3

  输入：points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
  输出：4
*/


/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  let slope
  let slopeMap
  let sum = 0
  let result = 0
  let temp = null
  if (points.length === 1) return 1
  for (let i = 0; i < points.length; i++) {
    slopeMap = new Map()
    sum = 2
    temp = null
    for (let j = 0; j < points.length; j++) {
      if (i === j) continue
      slope = (points[j][1] - points[i][1]) / (points[j][0] - points[i][0])
      temp = slopeMap.get(slope)
      if (temp) {
        slopeMap.set(slope, temp + 1)
      } else {
        slopeMap.set(slope, 2)
      }
    }
    if (result < Math.max(...Array.from(slopeMap.values()))) {
      result = Math.max(...Array.from(slopeMap.values()))
    }
  }
  console.log('result', result)
  return result
};
points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
maxPoints(points)