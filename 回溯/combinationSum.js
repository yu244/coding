/*
  组合总和

  给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，
  找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

  candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

  对于给定的输入，保证和为 target 的不同组合数少于 150 个。

  输入：candidates = [2,3,6,7], target = 7
  输出：[[2,2,3],[7]]
  解释：
  2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
  7 也是一个候选， 7 = 7 。
  仅有这两种组合。

  输入: candidates = [2,3,5], target = 8
  输出: [[2,2,2,2],[2,3,3],[3,5]]

  输入: candidates = [2], target = 1
  输出: []
*/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 只管推出提奥健，每次递归分出两个分支决定选和不选当前数值
var combinationSum = function(candidates, target) {
  const ans = new Array()
  function dfs (target, combine, idx) {
    if (idx === candidates.length) {
      return
    }
    if (target === 0) {
      ans.push(combine)
      return
    }
    dfs(target, combine, idx + 1)
    if (target - candidates[idx] >= 0) {
      dfs(target - candidates[idx], [...combine, candidates[idx]], idx)
    }
  }
  dfs(target, [], 0)
  return ans
};

// 传统模板
var combinationSum = function(candidates, target) {
  const res = new Array()
  function dfs (idx, combine, sum) {
    if (sum === target) {
      res.push(combine.slice())
    }
    if (sum > target) return
    for (let i = idx; i < candidates.length; i++) {
       combine.push(candidates[i])
       dfs(i, combine, sum + candidates[i])
       combine.pop()
    }
  }
  dfs(0, [], 0)
  return res
}

console.log('combinationSum()', combinationSum([2,3,6,7], 7))