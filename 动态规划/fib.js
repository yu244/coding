// 斐波那契数列动态规划，对1000000007取模
var fib = function(n) {
  const mod = 1000000007
  if (n < 2) {
    return n
  }
  let i = 1
  let pre = 0
  let current = 1
  let result = 1
  while(i++ < n) {
    result = (pre + current) % mod
    pre = current
    current = result
  }
  return result
};

console.log('fib(8)', fib(8))
