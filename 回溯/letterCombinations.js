/*
  给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

  给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
  2: ['a', 'b', 'c']
  3: ['d', 'e', 'f']
  4: ['g', 'h', 'i']
  5: ['j', 'k', 'l']
  6: ['m', 'n', 'o']
  7: ['p', 'q', 'r', 's']
  8: ['t', 'u', 'v']
  9: ['w', 'x', 'y', 'z']

  输入：digits = "23"
  输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

  输入：digits = ""
  输出：[]

  输入：digits = "2"
  输出：["a","b","c"]

  0 <= digits.length <= 4
  digits[i] 是范围 ['2', '9'] 的一个数字。
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
// 递归
var letterCombinations2 = function(digits) {
  const numMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  if (digits === '') return []
  const arr = []
  digits.split('').map(item => {
    arr.push(numMap[Number(item)])
  })
  let result = []
  function helper (chunkIndex, prev) {
    let chunk = arr[chunkIndex]
    let isLast = chunkIndex === arr.length - 1
    for (let val of chunk) {
      let cur = prev.concat(val)
      if (isLast) {
        result.push(cur)
      } else {
        helper(chunkIndex + 1, cur)
      }
    }
  }
  helper(0, '')
  return result
};

console.log('letterCombinations2()', letterCombinations2(''))