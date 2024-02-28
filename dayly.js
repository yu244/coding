/*
  165. 比较版本号
  忽略任何前导零后的整数值
  如果 version1 > version2 返回 1，
  如果 version1 < version2 返回 -1，
  除此之外返回 0。

  输入：version1 = "1.01", version2 = "1.001"
  输出：0
  解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"

  输入：version1 = "1.0", version2 = "1.0.0"
  输出：0
  解释：version1 没有指定下标为 2 的修订号，即视为 "0"

  输入：version1 = "0.1", version2 = "1.1"
  输出：-1
  解释：version1 中下标为 0 的修订号是 "0"，version2 中下标为 0 的修订号是 "1" 。0 < 1，所以 version1 < version2
*/
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
// 官解，默认俩都是0再去判断，取出前导0可以用parseInt
var compareVersion = function(version1, version2) {
  const arr1 = version1.split('.')
  const arr2 = version2.split('.')
  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    let x = 0, y = 0
    if (i < arr1.length) {
      x = parseInt(arr1[i])
    }
    if (i < arr2.length) {
      y = parseInt(arr2[i])
    }
    if (x < y) return -1
    if (x > y) return 1
  }
  return 0
}
// 第一遍写
var compareVersion = function(version1, version2) {
  const arr1 = version1.split('.')
  const arr2 = version2.split('.')
  let i = 0
  while (i < arr1.length || i < arr2.length) {
    let left = arr1[i] !== undefined ? deleteFrontZero(arr1[i]) : 0
    let right = arr2[i] !== undefined ? deleteFrontZero(arr2[i]) : 0
    if (left > right) {
      return 1
    }
    if (left < right) {
      return -1
    }
    i++
  }
  return 0
  function deleteFrontZero (str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== '0') {
        return Number(str.slice(i))
      }      
    }
    return 0
  }
};
const version1 = "0.1", version2 = "1.1"
console.log('compareVersion(version1, version2)', compareVersion(version1, version2))