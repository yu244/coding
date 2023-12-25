/*
  K 个一组翻转链表

  给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。

  k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，
  那么请将最后剩余的节点保持原有顺序。

  你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  const dummyNode = new ListNode(-1, head)
  let pre = dummyNode
  let end = dummyNode
  while (end.next) {
    for (let i = 0; i < k && end !== null; i++) end = end.next
    if (end === null) break
    let start = pre.next
    let next = end.next
    end.next = null
    pre.next = reverse(start)
    start.next = next
    pre = start
    end = pre
  }
  return dummyNode.next

  function reverse (head) {
    let pre = null
    let cur = head
    while (cur !== null) {
      let next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
    return pre
  }
};