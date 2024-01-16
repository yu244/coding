/*
  子集 II
  给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

  解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

  输入：nums = [1,2,2]
  输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]

  输入：nums = [0]
  输出：[[],[0]]
  
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 分叉回溯貌似不行
// var subsetsWithDup = function(nums) {
//   const res = new Array()
//   const n = nums.length
//   nums = nums.sort((a, b) => a - b)
//   function dfs (idx, path) {
//     let pre
//     if (idx === n) {
//       if (pre === nums[idx]) return
//       res.push(path.slice())
//       return
//     }
//     path.push(nums[idx])
//     pre = nums[idx]
//     dfs(idx + 1, path)
//     path.pop()
//     dfs(idx + 1, path)
//   }
//   dfs(0, [])
//   return res
// };
// 全遍历
var subsetsWithDup = function(nums) {
  const res = new Array()
  const n = nums.length
  nums = nums.sort((a, b) => a - b)
  function dfs(idx, path) {
    let pre
    res.push(path.slice())
    for (let i = idx; i < n; i++) {
      if (pre === nums[i]) continue
      path.push(nums[i])
      pre = nums[i]
      dfs(i + 1, path)
      path.pop()
    }
  }
  dfs(0, [])
  return res
}
const nums = [1,2,2]
console.log('subsetsWithDup(nums)', subsetsWithDup(nums))