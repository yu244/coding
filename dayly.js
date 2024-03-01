const nums = [1,2,3]
var permute = function(nums) {
  const res = new Array()
  const used = {}
  function dfs (path) {
    if (path.length === nums.length) {
      res.push(path.slice())
      return 
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[nums[i]]) continue
      used[nums[i]] = true
      path.push(nums[i])
      dfs(path)
      path.pop()
      used[nums[i]] = false
    }
  }
  dfs([])
  return res
}
// console.log('permute(nums)', permute(nums))


/**
 * @param {number[]} nums
 * @return {number}
 */
const nums2 = [-2,1,-3,4,-1,2,1,-5,4]
var maxSubArray = function(nums) {
  let max = -Infinity
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      max = Math.max(max, sum)
    }
  }
  return max
};
console.log('maxSubArray(nums2)', maxSubArray(nums2))