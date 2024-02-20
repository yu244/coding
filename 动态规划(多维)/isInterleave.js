/*
  97. 交错字符串

  给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。
  两个字符串 s 和 t 交错 的定义与过程如下，其中每个字符串都会被分割成若干 非空 子字符串：

  s = s1 + s2 + ... + sn
  t = t1 + t2 + ... + tm
  |n - m| <= 1
  交错 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 + ...
  注意：a + b 意味着字符串 a 和 b 连接。

  输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
  输出：true

  输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
  输出：false

  输入：s1 = "", s2 = "", s3 = ""
  输出：true
*/
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false
  const memo = Array.from({ length: s1.length + 1 }, () => new Array(s2.length + 1).fill(-1))
  function dfs (i, j, k) {
    if (memo[i][j] !== -1) return memo[i][j]
    if (k === s3.length) return true
    let isValid = false
    if (i < s1.length && s1[i] === s3[k]) {
      isValid = dfs(i + 1, j, k + 1)
    }
    if (j < s2.length && s2[j] === s3[k]) {
      isValid = isValid || dfs(i, j + 1, k + 1)
    }
    return memo[i][j] = isValid
  }
  return dfs(0,0,0)
};
const s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
console.log('isInterleave(s1, s2, s3)', isInterleave(s1, s2, s3))