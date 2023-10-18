/*
  给定一个候选人编号的集合 candidates 和一个目标数 target ,找出 candidates 中所有可以使数字和为 target 的组合。
  candidates 中的每个数字在每个组合中只能使用 一次 。
  注意：解集不能包含重复的组合。 

  输入: candidates = [10,1,2,7,6,1,5], target = 8,
  输出:
        [
          [1, 1, 6],
          [1, 2, 5],
          [1, 7],
          [2, 6]
        ]
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b)
  const result = []

  function dfs(deep, path, target) {
    if (deep > candidates.length) {
      return
    }
    for (let i = deep; i < candidates.length; i++) {
      if (candidates[i] > target) {
        continue
      }
      if (i > deep && candidates[i] === candidates[i - 1]) {
        continue
      }
      if (candidates[i] === target) {
        result.push([...path, candidates[i]])
        continue
      }
      dfs(i + 1, path.concat(candidates[i]), target - candidates[i])
    }
  }

  dfs(0, [], target)
  return result
};

const candidates = [2,5,2,1,2]

const res = combinationSum2(candidates, 5)
console.log('res', res)