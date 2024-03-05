let arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
  {id: 6, name: '部门5', pid: 0},
  {id: 7, name: '部门5', pid: 11},
]
function toTree (arr) {
  const map = {}
  const res = []
  for (const item of arr) {
    if (!map[item.id]) {
      map[item.id] = { children: [] }
    }
    map[item.id] = { ...item, children: map[item.id].children }
    const treeItem = map[item.id]
    if (item.pid === 0) {
      res.push(treeItem)
    } else {
      if (!map[item.pid]) {
        map[item.pid] = { children: [] }
      }
      map[item.pid].children.push(treeItem)
    }
  }
  console.log('res', res)
  return res
}
console.log(toTree(arr))