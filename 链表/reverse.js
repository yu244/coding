// 反转链表
var reverse = function (head) {
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