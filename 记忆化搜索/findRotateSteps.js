/*
  514. 自由之路

  电子游戏“辐射4”中，任务 “通向自由” 要求玩家到达名为 “Freedom Trail Ring” 的金属表盘，并使用表盘拼写特定关键词才能开门。

  给定一个字符串 ring ，表示刻在外环上的编码；给定另一个字符串 key ，表示需要拼写的关键词。您需要算出能够拼写关键词中所有字符的最少步数。

  最初，ring 的第一个字符与 12:00 方向对齐。您需要顺时针或逆时针旋转 ring 以使 key 的一个字符在 12:00 方向对齐，然后按下中心按钮，以此逐个拼写完 key 中的所有字符。

  旋转 ring 拼出 key 字符 key[i] 的阶段中：

  您可以将 ring 顺时针或逆时针旋转 一个位置 ，计为1步。旋转的最终目的是将字符串 ring 的一个字符与 12:00 方向对齐，并且这个字符必须等于字符 key[i] 。
  如果字符 key[i] 已经对齐到12:00方向，您需要按下中心按钮进行拼写，这也将算作 1 步。按完之后，您可以开始拼写 key 的下一个字符（下一阶段）, 直至完成所有拼写。

  输入: ring = "godding", key = "gd"
  输出: 4
  解释:
  对于 key 的第一个字符 'g'，已经在正确的位置, 我们只需要1步来拼写这个字符。 
  对于 key 的第二个字符 'd'，我们需要逆时针旋转 ring "godding" 2步使它变成 "ddinggo"。
  当然, 我们还需要1步进行拼写。
  因此最终的输出是 4。
  示例 2:

  输入: ring = "godding", key = "godding"
  输出: 13
  

  提示：

  1 <= ring.length, key.length <= 100
  ring 和 key 只包含小写英文字母
  保证 字符串 key 一定可以由字符串  ring 旋转拼出
*/
/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
/*
  514. 自由之路
  dp思路
  假设 s= goddid , t = gdi
  一开始 s[0] 为 g，无需旋转，次数 + 1，
  问题变成 s = goddid，t = di，此时分情况枚举
  1. s[0]向右移动到 s[2]，次数 +2+1。
  2. s[0]向左移动到 s[n - 1],次数 +1+1
  此时 s = goddid，t = i，继续分情况，此时可以归纳为单一子问题
  将上一步的 向右移动 情况记为
     s[i] -> s[r]
        如果 r > i, 则 旋转次数为 r - i,
        如果 r < i, 则 旋转次数为 n - (i - r)
        记作 kr
  将上一步的 向左移动 情况记为
     s[i] -> s[l]
        如果 i > l, 则旋转次数为 i - l
        如果 i < l, 则旋转次数为 n - (l - i)
        记作 kl
  两种情况取最小值 得到:

  dfs(j, i) = min((dfs(j + 1, r) + kr + 1), dfs(j + 1, l) + kl + 1)
  递归边界：dfs(j === t.length, i) = 0
  递归入口: dfs(0, 0)
  超时加记忆化
*/ 
var findRotateSteps = function(ring, key) {
  const n = ring.length
  const t = key.length
  const memo = Array.from({length: t}, () => new Array(n).fill(-1))
  function dfs (j, i) {
    if (j === t) return 0
    if (memo[j][i] !== -1) return memo[j][i]
    let kr = null
    let r
    for (let x = i; x < n; x++) {
      if (ring[x] === key[j]) {
        kr = x - i
        r = x
        break
      }
    }
    if (kr === null) {
      for (let x = 0; x < i; x++) {
        if (ring[x] === key[j]) {
          kr = n - (i - x)
          r = x
          break
        }        
      }
    }
    let kl = null
    let l
    for (let x = i; x >= 0; x--) {
      if (ring[x] === key[j]) {
        kl = i - x
        l = x
        break
      } 
    }
    if (kl === null) {
      for (let x = n - 1; x > i; x--) {
        if (ring[x] === key[j]) {
          kl = n - (x - i)
          l = x
          break
        } 
      }
    }
    return memo[j][i] = Math.min((dfs(j + 1, r) + kr + 1), (dfs(j + 1, l) + kl + 1))
  }
  return dfs(0, 0)
};
const ring = "godding", key = "gd"
console.log('findRotateSteps(ring, key)', findRotateSteps(ring, key))