/*
  分隔链表

  给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，
  使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

  你应当 保留 两个分区中每个节点的初始相对位置。

  输入：head = [1,4,3,2,5,2], x = 3
  输出：[1,2,2,4,3,5]

  输入：head = [2,1], x = 2
  输出：[1,2]
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (!head || !head.next) return head
  let moreNode = new ListNode(-1)
  let lessNode = new ListNode(-1)
  let more = moreNode
  let less = lessNode
  while (head) {
    if (head.val < x) {
      less.next = head
      less = less.next
      head = head.next
      less.next = null
    } else {
      more.next = head
      more = more.next
      head = head.next
      more.next = null
    }
  }
  less.next = moreNode.next
  return lessNode.next
};