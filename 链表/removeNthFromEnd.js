/*
  删除链表的倒数第 N 个结点
  给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

  输入：head = [1,2,3,4,5], n = 2
  输出：[1,2,3,5]

  输入：head = [1], n = 1
  输出：[]

  输入：head = [1,2], n = 1
  输出：[1]
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 计算长度，也可以写作栈从后pop
var removeNthFromEnd = function(head, n) {
  let breakNum = getLength(head) - n
  const node = new ListNode(-1)
  node.next = head
  let pre = node
  for (breakNum; breakNum > 1; breakNum--) {
    pre = pre.next
  }
  const next = pre.next
  pre.next = next.next
  return node.next

  function getLength (head) {
    let length = 0
    while (head) {
      head = head.next
      length++
    }
    return length
  } 
};
// 快慢指针
var removeNthFromEnd = function(head, n) {
  const dummyNode = new ListNode(-1)
  dummyNode.next = head
  let sapce = n
  let fast = head
  let slow = dummyNode
  while (n > 0) {
    fast = fast.next
    n--
  }
  while (fast) {
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummyNode.next
}