/*
  1556. 千位分隔数

  给你一个整数 n，请你每隔三位添加点（即 "." 符号）作为千位分隔符，并将结果以字符串格式返回。

  输入：n = 987
  输出："987"

  输入：n = 1234
  输出："1.234"

  输入：n = 123456789
  输出："123.456.789"

  输入：n = 0
  输出："0"
*/
/**
 * @param {number} n
 * @return {string}
 */
// 初始化字符串，通过长度判断条件 while 去 slice 拼接
var thousandSeparator = function(n) {
  let init = n.toString()
  let str = ''
  while (init.length / 3 > 1) {
    str = '.' + init.slice(init.length - 3, init.length) + str
    init = init.slice(0, init.length - 3)
  }
  str = init.slice(0) + str
  return str
};
const n = 1234
console.log('thousandSeparator(n)', thousandSeparator(n))

// 通过for
var thousandSeparator = function(n) {
  let str = n.toString()
  let res = ''
  for (let i = str.length - 1; i >= 0; i--) {
    if (i % 3 === 0 && i !== 0) {
      res = '.' + str[i] + res
    } else {
      res = str[i] + res
    }
  }
  return res
}
console.log('thousandSeparator(n)', thousandSeparator(n))

// 字节遇到的千分位
/*
  123.56
  356,545.123
*/
function byteDanceThousandSeparator (n) {
  let arr = n.toString().split('.')
  let str = arr[0]
  let res = ''
  while (str.length / 3 > 1) {
    res = ',' + str.slice(str.length - 3, str.length) + res
    str = str.slice(0, str.length - 3)
  }
  res = str.slice(0) + res
  if (arr.length > 1) {
    res = res + '.' + arr[1]
  }
  return res
}
const num = 356545.23
console.log('byteDanceThousandSeparator(num)', byteDanceThousandSeparator(num))