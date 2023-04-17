// 最长回文字符串
/* 
  输入 s = "babad"
  输出 "bab"

  输入 s = "cbbd"
  输出 "bb"
*/

// 双指针扩散
var longestPalindrome = function(s) {
  const len = s.length
  const list = s.split('')
  let resultStr = ''
  let tempStr = ''
  for (let i = 0; i < len; i++) {
    // 奇数
    helper(i, i)
    // 偶数
    helper(i, i + 1)
  }

  function helper(i, k) {
    while (i >= 0 && k < len && list[i] === list[k]) {
      i--
      k++
    }
    // while 会多执行一次 比如第一次 i = -1
    // substring 不包含最后一项，k会等于len，刚好不需要特殊处理
    tempStr = s.substring(i + 1, k)
    if (tempStr.length > resultStr.length) {
      resultStr = tempStr
    }
  }
  return resultStr
};

 console.log('longestPalindrome', longestPalindrome('abcdefgaa')) 