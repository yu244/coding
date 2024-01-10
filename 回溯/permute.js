/*
  全排列
  给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

  输入：nums = [1,2,3]
  输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

  输入：nums = [0,1]
  输出：[[0,1],[1,0]]

  输入：nums = [1]
  输出：[[1]]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// On判断
var permute = function(nums) {
  const res = new Array()
  function helper(arr) {
    for (let i = 0; i < nums.length; i++) {
      // 复杂度 On
      if (arr.include(nums[i])) continue      
      const newArr = arr.concat(nums[i])
      if (newArr.length === nums.length) {
        res.push(newArr)
        return
      } else {
        helper(newArr)
      }
    }
  }
  helper([])
  return res
};
// 哈希回溯
var permute = function(nums) {
  const res = new Array()
  const used = {}
  function dfs (path) {
    if (path.length === nums.length) {
      res.push(path.concat())
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[nums[i]]) continue
      path.push(nums[i])
      used[nums[i]] = true
      helper(path)
      path.pop()
      used[nums[i]] = false
    }
  }
  dfs([])
  return res
}

// 交换回溯
var permute = function(nums) {
  const res = new Array()
  const dynamic = new Array(...nums)
  const n = nums.length
  if (n < 2) return [nums]
  function backtrack (start) {
    if (start === n) {
      res.push(dynamic.slice())
      return
    }
    for (let i = start; i < n; i++) {
      if (start !== i) [dynamic[start], dynamic[i]] = [dynamic[i], dynamic[start]]
      backtrack(start + 1)
      if (start !== i) [dynamic[start], dynamic[i]] = [dynamic[i], dynamic[start]]
    }
  }
  backtrack(0)
  return res
}
console.log('permute()', permute([1,2,3]))