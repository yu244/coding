/* 
  反转链表
  输入：head = [1,2,3,4,5]
  输出：[5,4,3,2,1]
*/

var reverseBetween = function(head, left, right) {
  let pre = null
  let cur = head
  while (cur !== null) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
};