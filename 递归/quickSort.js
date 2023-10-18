// 快排
const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr
  }
  // 中间值
  const pivot = arr[Math.floor(arr.length / 2)]
  const left = []
  const right = []
  for (let i = 0; i < arr.length; i++) {
    // 跳过中间值对自身的比较
    if (i === Math.floor(arr.length / 2)) {
      continue
    }
    const element = arr[i];
    if (element < pivot) {
      left.push(element)
    } else {
      right.push(element)
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

const res = quickSort([1,3,2,4,1,3])
console.log('res', res)