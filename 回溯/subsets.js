/*
  子集
  给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

  解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

  输入：nums = [1,2,3]
  输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

  输入：nums = [0]
  输出：[[],[0]]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 控制循环起点，无显示出口，在递归过程中加入解集
var subsets = function(nums) {
  const res = new Array()
  const len = nums.length
  function dfs (idx, path) {
    res.push(path.slice())
    for (let i = idx; i < len; i++) {
      path.push(nums[i])
      // i + 1 而不是 idx + 1
      dfs(i + 1, path)      
      path.pop()
    }
  }
  dfs(0, [])
  return res
};
// 分为选当前数和不选当前数，出口为 idx 指针越界，在最底层输出所有数字，通过两次递归得出所有解，不需要for
var subsets = function(nums) {
  const res = new Array()
  const len = nums.length
  function dfs (idx, path) {
    if (idx === len) {
      res.push(path.slice())
      return
    }
    path.push(nums[idx])
    dfs(idx + 1, path)      
    path.pop()
    dfs(idx + 1, path)
  }
  dfs(0, [])
  return res
}
const nums = [1, 2, 3]
console.log('subsets(nums)', subsets(nums))