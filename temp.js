/*
  集装箱问题，要求输入一个整数 num，
  满足 [x, y, z] 中 x * y * z === num,
  求 x + y + z 和的最小值 

  输入：1
  输出：3，解释：1 x 1 x 1
  
  输入：6
  输出：6，解释：1 x 2 x 3

  输入：7
  输出：9，解释：1 x 1 x 7

  输入：200
  输出：18，解释：5 x 5 x 8
*/
// 极限值 [x,x,x] 相乘 >= num
function minSum(num) {
  let min = Infinity
  for (let x = 1; x * x * x <= num; x++) {
    if (num % x === 0) {
      let yz = num / x
      for (let y = 1; y <= yz; y++) {
        if (yz % y === 0) {
          z = yz / y
          min = Math.min(x + y + z, min)
        }
      }
    }
  }
  return min
}

console.log('minSum(200)', minSum(1))
