/**
 * 时间 O(10mn)  96ms  100%
 * 空间 O(mn)    46mb  88%
 */
function count(num1: string, num2: string, min_sum: number, max_sum: number): number {
  const MOD = 1e9 + 7;
  const ASCII0 = '0'.charCodeAt(0);
  const ans = _count(num2) - _count(num1) + isValid(num1) + MOD;    // 避免余数加减得到的负数
  // (a + b) % c = (a % c + b % c) % c;
  return ans % MOD;

  /** 判断单个数是否合法 */
  function isValid(num: string): number {
      let res = 0;
      for (let i = 0; i < num.length; i++) {
          res += num.charCodeAt(i) - ASCII0;
      }
      return res >= min_sum && res <= max_sum ? 1 : 0;
  }

  /** 获取 num 以内的合法数数量 */
  function _count(num: string): number {
      const n = num.length;
      const memo = new Array(n);
      for (let i = 0; i < n; i++) {
          // 每一位的记忆化存储上限是 9n 或 max_sum, 因为超过 max_sum 就过滤掉了
          // 直接记忆在 sum 位, 所以 +1
          memo[i] = new Array(Math.min(9 * n, max_sum) + 1).fill(-1);
      }
      // 第一位一定是 limit 的
      return f(num, memo, 0, 0, true);
  }

  // 从数字第 i 位开始计算满足条件的 count
  // 这里递归栈为 n 层
  function f(s: string, memo: number[][], i: number, sum: number, isLimit: boolean): number {
      // 递归求和超出上限, 停止后续计算
      if (sum > max_sum) return 0;

      // 递归求和进行到最后一位, 满足条件返回 1 值
      if (i === s.length) return sum >= min_sum ? 1 : 0;

      // 记忆化存储
      if (!isLimit && memo[i][sum] !== -1) return memo[i][sum];
      
      // 累加和
      let res = 0;

      // 当前位上限
      const up = isLimit ? s.charCodeAt(i) - ASCII0 : 9;

      // 枚举当前位可填数字
      for (let j = 0; j <= up; j++) {
          // 转移方程：累加 i + 1 位满足条件的 count
          // (a + b) % c = (a % c + b % c) % c;
          res = (res + f(s, memo, i + 1, sum + j, isLimit && j === up)) % MOD;
      }

      // 记忆化存储累加和
      if (!isLimit) memo[i][sum] = res;

      return res;
  }
};
