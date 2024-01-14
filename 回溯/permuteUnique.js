/*
  全排列
  给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

  输入：nums = [1,1,2]
  输出：
  [[1,1,2],
  [1,2,1],
  [2,1,1]]

  输入：nums = [1,2,3]
  输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

  1 <= nums.length <= 8
  -10 <= nums[i] <= 10
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 判断string
var permuteUnique = function(nums) {
  const res = new Array()
  const len = nums.length
  const used = {}
  const strUsed = {}
  let temp
  function dfs (path) {
    if (path.length === len) {
      temp = path.slice()
      if (strUsed[temp]) return
      res.push(temp)
      strUsed[temp] = true
      return 
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) continue
      path.push(nums[i])
      used[i] = true
      dfs(path)
      path.pop()
      used[i] = false
    }
  }
  dfs([])
  return res
};
// 排序后记录前一个值
var permuteUnique = function(nums) {
  const res = new Array()
  const len = nums.length
  const used = {}
  let pre
  nums = nums.sort((a, b) => a - b)
  function dfs(path) {
    if (path.length === len) {
      res.push(path.slice())
      return
    }
    for (let i = 0; i < len; i++) {
      if (used[i] || pre === nums[i]) continue
      path.push(nums[i])
      used[i] = true
      pre = nums[i]
      dfs(path)
      path.pop()
      used[i] = false
    }
  }
  dfs([])
  return res
}
const nums = [1,1,2]
console.log('permuteUnique(nums)', permuteUnique(nums))