/*
  670.最大交换
  给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。

  输入: 2736
  输出: 7236
  解释: 交换数字2和数字7。

  输入: 9973
  输出: 9973
  解释: 不需要交换。
  注意:

  给定数字的范围是 [0, 108]
*/
/**
 * @param {number} num
 * @return {number}
 */
// dfs
var maximumSwap = function(num) {
  const arr = (''+ num).split('')
  let max = num
  function dfs(cur) {
    if (cur >= arr.length - 1) return
    for (let i = 1; i < arr.length; i++) {
      if (cur + i > arr.length - 1) return
      [arr[cur], arr[cur + i]] = [arr[cur + i], arr[cur]]
      let temp = +arr.join('')
      if (temp > max) {
        max = temp
      }
      [arr[cur + i], arr[cur]] = [arr[cur], arr[cur + i]]
      dfs(cur + 1)
    }
  }
  dfs(0)
  return max
};

// 两层for
var maximumSwap = function(num) {
  const arr = ('' + num).split('')
  let max = num
  let temp
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      temp = +arr.join('')
      if (temp > max) {
        max = temp
      }
      [arr[j], arr[i]] = [arr[i], arr[j]] 
    }
  }
  return max
}

// 单层循环贪心
// 假设 num = 9952767，反向遍历，维护最大值的下标
// 从右边找到最大值的同时继续遍历，在最大值的左侧有比他小的值，更新需要交换的下标
var maximumSwap = function(num) {
  const s = num.toString()
  const n = s.length
  let maxIdx = n - 1
  let min = -1, max = 0
  for (let i = n - 2; i >= 0; i--) {
    if (s[i] > s[maxIdx]) {
      maxIdx = i
    } else if (s[i] < s[maxIdx]) {
      min = i
      max = maxIdx
    }
  }
  if (min === -1) return num
  // 注意分号，下一行以 + - () [] 正则 开头的会连续执行
  let arr = s.split('');
  [arr[min], arr[max]] = [arr[max], arr[min]]
  return +arr.join('')
}

const num = 2736
console.log('maximumSwap(num)', maximumSwap(num))