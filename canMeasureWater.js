/*
  365. 水壶问题
  有两个水壶，容量分别为 jug1Capacity 和 jug2Capacity 升。
  水的供应是无限的。确定是否有可能使用这两个壶准确得到 targetCapacity 升。
  如果可以得到 targetCapacity 升水，最后请用以上水壶中的一或两个来盛放取得的 targetCapacity 升水。
  你可以：

  装满任意一个水壶
  清空任意一个水壶
  从一个水壶向另外一个水壶倒水，直到装满或者倒空

  输入: jug1Capacity = 3, jug2Capacity = 5, targetCapacity = 4
  输出: true
  解释：来自著名的 "Die Hard"

  输入: jug1Capacity = 2, jug2Capacity = 6, targetCapacity = 5
  输出: false

  输入: jug1Capacity = 1, jug2Capacity = 2, targetCapacity = 3
  输出: true
*/
/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
  if(z > x + y || z < 0) return false;
  if(z===0) return true;
  if(x === 0 || y === 0) return x + y === z;
  const gcd = (a,b)=>{
    if(b === 0) return a;
    return gcd(b, a % b);
  }
  return z % (gcd(x, y)) === 0;
};

const jug1Capacity = 3, jug2Capacity = 5, targetCapacity = 4
console.log(canMeasureWater(jug1Capacity, jug2Capacity, targetCapacity))