/*
  LRU 缓存

  请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
  实现 LRUCache 类：
  LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
  int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
  void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；
  如果不存在，则向缓存中插入该组 key-value 。
  如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
  
  函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
*/
// Map 方法，通过 map.keys().next().val 获取最旧的数值
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.map = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.map.get(key)) {
    const value = this.map.get(key)
    this.map.delete(key)
    this.map.set(key, value)
    return value
  } else {
    return -1
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    this.map.delete(key)
  }
  if (this.map.size === this.capacity) {
    this.map.delete(this.map.keys().next().value)
  }
  this.map.set(key, value)
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class Node {
  constructor(key = 0, value = 0) {
    this.value = value
    this.key = key
    this.prev = null
    this.next = null
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = new Object(null)
    this.size = 0
    this.head = new Node()
    this.tail = new Node()
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  get (key) {
    const node = this.map[key]
    if (node === undefined) return -1
    this.removeNode(node)
    this.pushFront(node)
    return node.value
  }

  put (key, value) {
    let node = this.map[key]
    if (node === undefined) {
      node = new Node(key, value)
      this.map[key] = node
      this.size++
      this.pushFront(node)
      if (this.size > this.capacity) {
        const last = this.tail.prev
        delete this.map[last.key]
        this.removeNode(last)
      }
    } else {
      node.value = value
      this.removeNode(node)
      this.pushFront(node)
    }
  }

  pushFront (node) {
    node.prev = this.head
    node.next = this.head.next
    this.head.next.prev = node
    this.head.next = node
  }

  removeNode (node) {
    node.prev.next = node.next
    node.next.prev = node.prev
  }

}