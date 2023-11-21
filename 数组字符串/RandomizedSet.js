/*
  O(1) 时间插入、删除和获取随机元素

  实现RandomizedSet 类：

  RandomizedSet() 初始化 RandomizedSet 对象
  bool insert(int val) 当元素 val 不存在时，向集合中插入该项，并返回 true ；否则，返回 false 。
  bool remove(int val) 当元素 val 存在时，从集合中移除该项，并返回 true ；否则，返回 false 。
  int getRandom() 随机返回现有集合中的一项（测试用例保证调用此方法时集合中至少存在一个元素）。
  每个元素应该有 相同的概率 被返回。
  你必须实现类的所有函数，并满足每个函数的 平均 时间复杂度为 O(1) 。
*/

// 利用 Map ，key 存储 值，value 存储下标
var RandomizedSet = function() {
  this.data = []
  this.valToIndex = new Map()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.valToIndex.has(val)) return false
  this.data.push(val)
  this.valToIndex.set(val, this.data.length - 1)
  return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.valToIndex.has(val)) return false
  const index = this.valToIndex.get(val)
  if (index !== this.data.length) {
    [this.data[this.data.length - 1], this.data[index]] = [this.data[index], this.data[this.data.length - 1]]
  }
  this.data.pop()
  this.valToIndex.delete(val)
  this.valToIndex.set(this.data[index], index)
  return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const random = Math.floor(Math.random() * this.data.length)
  console.log(this.data,this.valToIndex,random)
  return this.data[random]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */