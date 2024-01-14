/*
  删除排序链表中的重复元素 II
  给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。
  返回 已排序的链表 。

  输入：head = [1,2,3,3,4,4,5]
  输出：[1,2,5]

  输入：head = [1,1,1,2,3]
  输出：[2,3]

  链表中节点数目在范围 [0, 300] 内
  -100 <= Node.val <= 100
  题目数据保证链表已经按升序 排列
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return head
  const dummyNode = new ListNode(0, head)
  let cur = dummyNode
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const x = cur.next.val
      while (cur.next && cur.next.val === x) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  return dummyNode.next
};

var deleteDuplicates = function(head) {
  if (!head) return head
  const dummyNode = new ListNode(-1)
  dummyNode.next = head
  let fast = head
  let slow = dummyNode
  while (fast) {
    while (fast.next && fast.val === fast.next.val) {
      fast = fast.next
    }
    if (slow.next !== fast) {
      // 暂时指向不同值，只在后面连续的时候替换slow
      slow.next = fast.next
    } else {
      slow = slow.next
    }
    fast = fast.next
  }


  // if (!head) return head
  // const dummyNode = new ListNode(0, head)
  // let fast = head
  // let slow = dummyNode  
  // while (fast) {
  //   while (fast.next && fast.next.val === fast.val) {
  //     fast = fast.next
  //   }
  //   if (slow.next !== fast) {
  //     slow.next = fast.next
  //   } else {
  //     slow = slow.next
  //   }
  //   fast = fast.next
  // }
  // return dummyNode.next
}

// 每日一题
var deleteDuplicates = function(head) {
  const dummyNode = new ListNode(null, head)
  let pre = dummyNode
  let cur = dummyNode.next
  while (cur !== null) {
    if (cur.next === null && cur.val === pre.val) {
      pre.next = null
      break
    }
    if (cur.val !== pre.val) {
      pre.next = cur
      pre = cur
    }
    cur = cur.next
  }
  return dummyNode.next
}