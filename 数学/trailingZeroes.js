/*
  阶乘后的零

  给定一个整数 n ，返回 n! 结果中尾随零的数量。

  提示 n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1

  输入：n = 3
  输出：0
  解释：3! = 6 ，不含尾随 0

  输入：n = 5
  输出：1
  解释：5! = 120 ，有一个尾随 0

  输入：n = 0
  输出：0

  0 <= n <= 10^4
*/
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let result = 0
  while (n > 1) {
    n = parseInt(n / 5)
    result += n
  }
  return result
};

const num = 10
trailingZeroes(50)
// [10,9,8,7,6,5,4,3,2,1]
// [20,19,18,17,16,15,14,13,12,11]
// [30,29,28,27,26,25,24,23,22,21]