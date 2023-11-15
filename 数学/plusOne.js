/*
  加一

  给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
  最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
  你可以假设除了整数 0 之外，这个整数不会以零开头。

  输入：digits = [1,2,3]
  输出：[1,2,4]
  解释：输入数组表示数字 123。

  输入：digits = [4,3,2,1]
  输出：[4,3,2,2]
  解释：输入数组表示数字 4321。

  输入：digits = [0]
  输出：[1]
*/

// 需要考虑 [9,9] 输出 [1,0,0] 的类似情况
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits[digits.length - 1] === 9) {
    let carry = true
    for (let i = digits.length - 1; i >= 0; i--) {
      if (carry && digits[i] === 9) {
        digits[i] = 0
      } else {
        digits[i] += 1
        carry = false
        break
      }
      if (i === 0) {
        digits[0] = 0
        digits.unshift(1)
      }
    }
  } else {
    digits[digits.length - 1] += 1
  }
  return digits
};

const nums = [9,9]
console.log('plusOne(nums)', plusOne(nums))