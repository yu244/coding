/*
  组合
  给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

  你可以按 任何顺序 返回答案。

  输入：n = 4, k = 2
  输出：
  [
    [2,4],
    [3,4],
    [2,3],
    [1,2],
    [1,3],
    [1,4],
  ]

  输入：n = 1, k = 1
  输出：[[1]]
*/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = new Array()
  function helper(start, path) {
    if (path.length === k) {
      res.push(path.slice())
      return
    }
    for (let i = start; i <= n; i++) {
      path.push(i)
      helper(i + 1, path)
      path.pop()
    }
  }
  helper(1, [])
  return res
};

console.log(combine(5, 2))