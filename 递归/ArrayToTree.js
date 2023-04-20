// 扁平转嵌套
let arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
  {id: 6, name: '部门5', pid: 0},
  {id: 7, name: '部门5', pid: 11},
]

/* 
  递归思路
  1. 找出数组中 pid 为 0 的组成初始父级数组 result，并从数组中剔除组成新数组 brr
  2. 循环 result 
  3. 写递归函数，入参 item: (当前 children 项)，pid: (id 标识)
  4. 循环 brr 找出 pid 相同的 推入 item
  5. 调用递归传入 item.children， pid

  etc. 如果想让 children 长度为 0 的情况置为 null，递归需传入父地址判断 item 长度 0 置 null
*/

const toTree = (arr) => {
  const result = []
  const brr = []
  for (const item of arr) {
    if (item.pid === 0) {
      result.push(item)
    } else {
      brr.push(item)
    }
  }

  function helper (parent, item, pid) {
    for (const obj of brr) {
      if (obj.pid === pid) {
        item.push(obj)
        obj.children = []
        helper(obj, obj.children, obj.id)
      }
    }
    if (item.length === 0) {
      parent.children = null
    }
  }

  for (let i = 0; i < result.length; i++) {
    result[i].children = []
    helper(result[i], result[i].children, result[i].id)
  }

  console.log('result', result)
  return result
}

// toTree(arr)


/* 
  用 Map 存储借助对象引用
  1. 构造 Map 存储数据，初始化 children 为空数组
  2. 循环 arr，如果 item.pid 为 0，推入 result 作为起始数组
  3. itemMap[pid] 为 Map 中的父级引用，itemMap[id] 为子级引用
  4. 父级引用的 children 推入子级引用。 itemMap[pid].children 推入 itemMap[id]
  5. 边界条件：如果 itemMap[pid] 不存在，Map 新增 itemMap[pid] 及 初始化 children 为空数组
*/

const toTree2 = (arr) => {
  const result = []
  const itemMap = {}
  for (const item of arr) {
    itemMap[item.id] = { ...item, children: [] }
  }
  for (item of arr) {
    const id = item.id
    const pid = item.pid
    const treeItem = itemMap[id]
    if (pid === 0) {
      result.push(treeItem)
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: []
        }
      }
      itemMap[pid].children.push(treeItem)
    }
  }
  console.log('result', result)
  return result
}

// toTree2(arr)

/* 
  Map方式 优化，在遍历时构建 Map
*/

const toTree3 = (arr) => {
  const result = []
  const itemMap = {}
  for (const item of arr) {
    const id = item.id
    const pid = item.pid
    if (!itemMap[id]) {
      itemMap[id] = { children: [] }
    }

    itemMap[id] = {...item, children: itemMap[id].children}

    const treeItem = itemMap[id]
    if (pid === 0) {
      result.push(treeItem)
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = { children: [] }
      }
      itemMap[pid].children.push(treeItem)
    }

  }

  console.log('result', result)
  return result
}

toTree3(arr)