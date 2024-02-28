/*
  无重复最长子串问题
  推荐：1. set记录重复与否，外层for，内层while操作left直到无重复为止，计算max
  2. 双指针，while + while，稍微有点麻烦
*/
const s = 'pwwkew'
function lengthOfLongestSubstring (s) {
  let left = 0
  let max = 0
  const set = new Set()
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      while (s[left] !== s[i]) {
        set.delete(s[left])
        left++
      }
      left++
    } else {
      set.add(s[i])
    }
    max = Math.max(max, i - left + 1)
  }
  return max
}

/*
  反转链表问题
  将原 null -> 1 -> 2 -> 3
  变成 null <- 1 <- 2 <- 3
  推荐: 1.while 迭代, 两个常驻指针 + 一个临时指针保存cur.next
  2.递归缓存各个节点直到尾节点，注意递归结束条件,return 的是结果首节点
*/
function reverseList (head) {
  let pre = null
  let cur = head
  while (cur !== null) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

function reverseList (head) {
  if (head === null || head.next === null) {
    return head
  }
  const node = reverseList(head.next)
  head.next.next = head
  head.next = null
  return node
}
