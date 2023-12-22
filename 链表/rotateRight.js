/*
  旋转链表

  给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

  输入：head = [1,2,3,4,5], k = 2
  输出：[4,5,1,2,3]

  输入：head = [0,1,2], k = 4
  输出：[2,0,1]
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
var rotateRight = function(head, k) {
  if (!head || !head.next || k === 0) return head
  let cur = head
  let num = 1
  while (cur.next) {
    cur = cur.next
    num++
  }
  cur.next = head
  // 不论k是否超过num 都适用
  let times = num - (k % num)
  while (times > 0) {
    cur = cur.next
    times--
  }
  let res = cur.next
  cur.next = null
  return res
};