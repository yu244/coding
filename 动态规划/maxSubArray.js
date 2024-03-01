// 最大子序和
const nums2 = [-2,1,-3,4,-1,2,1,-5,4]
// dp 
// f(i) = max(f(i - 1) + nums[i], nums[i])
var maxSubArray = function(nums) {
  const dp = new Array()
  dp[0] = nums[0]
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    max = Math.max(max, dp[i])
  }
  return max
}
// 暴力
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