/*
  241. 为运算表达式设计优先级

  给你一个由数字和运算符组成的字符串 expression ，按不同优先级组合数字和运算符，计算并返回所有可能组合的结果。你可以 按任意顺序 返回答案。

  生成的测试用例满足其对应输出值符合 32 位整数范围，不同结果的数量不超过 104 。

  输入：expression = "2-1-1"
  输出：[0,2]
  解释：
  ((2-1)-1) = 0 
  (2-(1-1)) = 2

  输入：expression = "2*3-4*5"
  输出：[-34,-14,-10,-10,10]
  解释：
  (2*(3-(4*5))) = -34 
  ((2*3)-(4*5)) = -14 
  ((2*(3-4))*5) = -10 
  (2*((3-4)*5)) = -10 
  (((2*3)-4)*5) = 10
  
  1 <= expression.length <= 20
  expression 由数字和算符 '+'、'-' 和 '*' 组成。
  输入表达式中的所有整数值在范围 [0, 99] 
*/
/**
 * @param {string} expression
 * @return {number[]}
 */
const ADDITION = '+';
const SUBTRACTION = '-';
const MULTIPLICATION = '*';

var diffWaysToCompute = function(expression) {
  const n = expression.length;
  const ops = []
  for (let i = 0; i < n; i++) {
    if (isNaN(expression[i])) {
      ops.push(expression[i])
    } else {
      let t = ''
      while (!isNaN(expression[i])) {
        t = t + expression[i]
        i++
      }
      ops.push(Number(t))
      i--
    }
  }
  const dp = new Array(ops.length).fill(0).map(() => Array.from({length: ops.length}, () => new Array()));
  function dfs(left, right) {
    if (dp[left][right].length > 0) return dp[left][right];
    if (left === right) {
      dp[left][right].push(ops[left]);
    } else {
      for (let i = left; i < right; i = i + 2) {
        const leftResult = dfs(left, i);
        const rightResult = dfs(i + 2, right);
        for (const lItem of leftResult) {
          for (const rItem of rightResult) {
            if (ops[i + 1] === '+') {
              dp[left][right].push(lItem + rItem);
            } else if (ops[i + 1] === '-') {
              dp[left][right].push(lItem - rItem);
            } else {
              dp[left][right].push(lItem * rItem);
            }
          }
        }
      }
    }
    return dp[left][right];
  }
  return dfs(0, ops.length - 1);
};
const expression = "2*3-4*5"
console.log('diffWaysToCompute(expression)', diffWaysToCompute(expression))