/*
  给你一个链表的头节点 head ，判断链表中是否有环。
  如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 
  为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
  注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

  如果链表中存在环 ，则返回 true 。 否则，返回 false 。
*/

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// hashMap
var hasCycle = function(head) {
  const dataMap = new Map()
  let cur = head
  let result = false
  while(cur && cur.next) {
    if (dataMap.get(cur)) {
    result = true
    break
    }
    dataMap.set(cur, true)
    cur = cur.next
  }
  return result
};

// 快慢指针，如果有环，满指针必定会与快指针相遇
var hasCycle = function(head) {
  let result = false
  let slow = head
  let fast = head
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      result = true
      break
    }
  }
  return result
}