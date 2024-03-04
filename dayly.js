// 回溯不让过
var threeSum = function(nums) {
  nums.sort()
  const n = nums.length
  const res = new Array()
  const used = {}
  const set = new Set()
  function dfs(path, sum, index) {
    if (path.length === 3) {
      if (sum === 0) {
        const str = path.sort().join('')
        if (!set.has(str)) {
          set.add(str)
          res.push(path.slice())
        }
      }
      return
    }
    for (let i = index; i < n; i++) {
      if (used[i]) continue
      path.push(nums[i])
      sum += nums[i]
      used[i] = true
      dfs(path, sum, i + 1)
      path.pop()
      sum -= nums[i]
      used[i] = false
    }
  }
  dfs([], 0, 0)
  return res
};
// 双指针
function threeSum (nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  const res = new Array()
  let L
  let R
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) break
    L = i + 1
    R = n - 1
    if (nums[i] === nums[i - 1]) continue
    while (L < R && nums[R] >= 0) {
      let temp = nums[i] + nums[L] + nums[R]
      if (temp === 0) {
        res.push([nums[i], nums[L], nums[R]])
        while (L < R && nums[L] === nums[L + 1]) L++
        while (L < R && nums[R] === nums[R - 1]) R--
        L++
        R--
      }
      else if (temp > 0) R--
      else if (temp < 0) L++
    }    
  }
  return res
}
const nums = [-1,0,1,2,-1,-4]
console.log('threeSum(nums)', threeSum(nums))