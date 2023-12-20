/*
  合并两个有序链表

  将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

  输入：l1 = [1,2,4], l2 = [1,3,4]
  输出：[1,1,2,3,4,4]

  输入：l1 = [], l2 = []
  输出：[]

  输入：l1 = [], l2 = [0]
  输出：[0]

  两个链表的节点数目范围是 [0, 50]
  -100 <= Node.val <= 100
  l1 和 l2 均按 非递减顺序 排列
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let prehead = new ListNode(-1)
  let prev = prehead
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      prev.next = list1
      list1 = list1.next
    } else {
      prev.next = list2
      list2 = list2.next
    }
    prev = prev.next
  }
  prev.next = list1 === null ? list2 : list1
  return prehead.next
}

console.log('mergeTwoLists(list1, list2)', mergeTwoLists(list1, list2))