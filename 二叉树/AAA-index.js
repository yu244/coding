// 二叉树一般是dfs或者bfs，这里总结几种方法


// bfs，一般计算各个层级之间的联系
function bfs (root) {
  const queue = new Array()
  queue.push(root)
  while (queue.length > 0) {
    // 确定当前层级需要遍历的长度，这步必须固定下来，否则在循环过程中的推入操作会改变queue的长度
    const n = queue.length
    for (let i = 0; i < n; i++) {
      const node = queue.shift()
      // ...做一些题意的判断操作
      if (node.left !== null) {
        queue.push(node.left)
      }
      if (node.right !== null) {
        queue.push(node.right)
      }
    } 
  }
  // 输出结果
  return xxx
}

// dfs 解决一些情况：题意（一些兄弟节点之间）或（兄弟与根节点）有关联，或者需要先序、中序、后序遍历
// 先序（根-左-右）、中序（左-根-右）、后续（左-右-根）