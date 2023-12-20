/*
  反转链表 II

  给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。
  请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

  输入：head = [1,2,3,4,5], left = 2, right = 4
  输出：[1,4,3,2,5]
  
  输入：head = [5], left = 1, right = 1
  输出：[5]
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  const dummyNode = new ListNode(-1)
  dummyNode.next = head
  let pre = dummyNode
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next
  }
  let cur = pre.next
  for (let i = 0; i < right - left; i++) {
    const next = cur.next
    cur.next = next.next
    next.next = pre.next
    pre.next = next
  }
  return dummyNode.next
};

const head = [1,2,3,4,5], left = 2, right = 4
console.log('reverseBetween(head, left, right)', reverseBetween(head, left, right))
