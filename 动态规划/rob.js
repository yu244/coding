

/* 
  打家劫舍
  你是一个专业的小偷，计划偷窃沿街的房屋。
  每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
  给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
  输入 [1,2,3,1] ，输出 4
  输入 [2,7,9,3,1]，输出 12
*/

/* 
  考虑所有偷窃方案过于困难，从简单的情况开始，记
  f(k) 为 从 k 个房屋中能取得的最大数额， 入参为n: number[]， Ai 为第 i 家现金
  先看 n 个数为 1 的情况
  n 个数为 1 ， f(1) = A1
  n 个数为 2 ， f(2) = Math.max(A1, A2)
  n 个数为 3 ， f(3) = Math.max(f(1) + A3 , f(2))
  f(k) = Math.max(f(k - 2) + Ak, f(k - 1)) 
*/
function rob (nums) {
  let len = nums.length
  if (len < 2) {
    return nums[len - 1] ? nums[len - 1] : 0
  }
  // 定义数组模拟所有情况
  let current = [nums[0], Math.max(nums[0], nums[1])]
  for (let k = 2; k < len; k++) {
    // k = 2
    // current[2] = Math.max(current[0] + nums[2], current[1])
    // k = 3
    // current[3] = Math.max(current[1] + nums[3], current[2])
    current[k] = Math.max(current[k - 2] + nums[k], current[k - 1])
  }
  console.log('current', current)
  // 返回最后一项
  return current[len - 1]
}

const result = rob([1,3,6,1,3,9,12])
console.log('result', result)