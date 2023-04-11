// 斐波那契数列
// 要求输入一个整数，输出斐波那契数列的第 n 项（从0开始，第0项为0）
// f(n) = f(n-1) + f(n-2)

let result = ''
// 计算次数
let num = 0

// 递归解法
function Fibonacci (n) {
  if (n < 2) {
    return n
  }
  num += 1
  return Fibonacci(n - 1) + Fibonacci(n - 2)
}
// result = Fibonacci(40)
// console.log('result', result)
// console.log('num', num)

// 递归本质是把一个问题分解成两个或多个小问题，如果小问题存在互相重叠，那么就存在重复计算
// f(n) = f(n-1) + f(n-2) 这种拆分使用递归是典型的存在重叠的情况，所以会造成非常多的重复计算
// 另外，每一次函数调用内存中都需要分配空间，每个进程的栈容量有限，递归层次过多，会造成栈溢出


// 递归加记忆化，如果n同样是40，记忆化执行次数76次，普通递归165580140次
function FibonacciMemory (n, memory = []) {
  if (n < 2) {
    return n
  }
  if (!memory[n]) {
    memory[n] = FibonacciMemory(n - 1, memory) + FibonacciMemory(n - 2, memory)
  }
  num += 1
  return memory[n]
}

// result = FibonacciMemory(40)
// console.log('result', result)
// console.log('num', num)

// 动态规划, 执行次数 n 次
function FibonacciDynamic (n) {
  if (n <= 1) {
    return n
  }
  let i = 1
  let pre = 0
  let current = 1
  let result = 0
  while (i++ < n) {
    result = current + pre
    pre = current
    current = result
  }
  console.log('i', i)
  return result
}

// result = FibonacciDynamic(40)
// console.log('result', result)
// console.log('num', num)
