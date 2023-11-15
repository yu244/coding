/*
  Pow(x, n)

  实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，x^n ）。

  输入：x = 2.00000, n = 10
  输出：1024.00000

  输入：x = 2.10000, n = 3
  输出：9.26100

  输入：x = 2.00000, n = -2
  输出：0.25000
  解释：2^-2 = (1/2)^2 = 1/4 = 0.25
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1
  if (n < 0) return 1 / myPow(x, -n)
  if (n % 2) return x * myPow(x, n - 1)
  return myPow(x * x, n / 2)
}

// 会超时，比如 x = 2, n = -2147483648
var myPow2 = function(x, n) {
  let result = x
  if (n === 0) {
    return 1
  }
  if (n > 0) {
    while (n > 1) {
      result = result * x
      n--
    }
  } else {
    n = Math.abs(n)
    while (n > 1) {
      result = result * x
      n--
    }
    result = 1 / result
  }
  return result
};

myPow(2.1, 3)