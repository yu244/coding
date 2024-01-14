/*
  复原 IP 地址
  有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

  例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，
  但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。

  给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，
  这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

  输入：s = "25525511135"
  输出：["255.255.11.135","255.255.111.35"]

  输入：s = "0000"
  输出：["0.0.0.0"]

  输入：s = "101023"
  输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
*/
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const res = new Array()
  function dfs (path, start) {
    if (path.length === 4 && start === s.length) {
      res.push(path.join('.'))
      return
    }
    // 长度为4但还有剩余
    if (path.length === 4 && start < s.length) return
    // 三种切割方式
    for (let len = 1; len <= 3; len++) {
      // 切割长度大于字符串长度
      if (start + len - 1 >= s.length) return
      // 不能前导 0 
      if (len !== 1 && s[start] === '0') return
      const str = s.substring(start, start + len)
      // 不能大于 255
      if (len === 3 && +str > 255) return
      path.push(str)
      dfs(path, start + len)
      path.pop()
    }
  }
  dfs([], 0)
  return res
};

const s = "25525511135"
console.log('restoreIpAddresses(s)', restoreIpAddresses(s))