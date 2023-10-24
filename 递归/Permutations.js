/*
  给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

  输入：nums = [1,2,3]
  输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

  输入：nums = [0,1]
  输出：[[0,1],[1,0]]
*/
var permute = function(nums) {
  const len = nums.length
  const result = []
  function helper (arr) {
    for (let i = 0; i < nums.length; i++) {
      if (arr.includes(nums[i])) {
        continue
      }
      const newArr = arr.concat(nums[i])
      if (newArr.length === len) {
        result.push(newArr)
        break
      }
      helper(newArr)
    }
  }
  helper([])
  return result
};

const nums = [1]

console.log(permute(nums))