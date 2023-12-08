/*
  同构字符串

  给定两个字符串 s 和 t ，判断它们是否是同构的。

  如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。

  每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。

  输入：s = "egg", t = "add"
  输出：true

  输入：s = "foo", t = "bar"
  输出：false

  输入：s = "paper", t = "title"
  输出：true
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let sMap = {}
  let tMap = {}
  for (let i = 0; i < s.length; i++) {
    let x = t[i]
    let y = s[i]
    if ((sMap[x] && sMap[x] !== y) || (tMap[y] && tMap[y] !== x)) {
      return false
    }
    sMap[t[i]] = s[i]
    tMap[s[i]] = t[i]
  }
  return true
}

const s = "foo", t = "bar"
console.log('isIsomorphic(s, t)', isIsomorphic(s, t))


// 过测，map 按顺序比较出现位置
var isIsomorphic2 = function(s, t) {
  if (s.length !== t.length) return false
  let sMap = new Map()
  let tMap = new Map()
  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) {
      sMap.set(s[i], [...sMap.get(s[i]), i])
    } else {
      sMap.set(s[i], [i])
    }
    if (tMap.has(t[i])) {
      tMap.set(t[i], [...tMap.get(t[i]), i])
    } else {
      tMap.set(t[i], [i])
    }
  }
  let sIterator = sMap.values()
  let tIterator = tMap.values()
  let sTemp = sIterator.next()
  let tTemp = tIterator.next()
  while(!sTemp.done && !tTemp.done) {
    if (sTemp.value.join('') !== tTemp.value.join('')) return false
    sTemp = sIterator.next()
    tTemp = tIterator.next()
  }
  return true
};