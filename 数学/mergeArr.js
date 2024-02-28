// 合并两个有序数组
/*
  给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

  请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
  
  注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。
  为了应对这种情况，nums1 的初始长度为 m + n
  其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

  输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
  输出：[1,2,2,3,5,6]
  解释：需要合并 [1,2,3] 和 [2,5,6] 。
  合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。

  输入：nums1 = [1], m = 1, nums2 = [], n = 0
  输出：[1]
  解释：需要合并 [1] 和 [] 。
  合并结果是 [1] 。

  输入：nums1 = [0], m = 0, nums2 = [1], n = 1
  输出：[1]
  解释：需要合并的数组是 [] 和 [1] 。
  合并结果是 [1] 。
  注意，因为 m = 0 ，所以 nums1 中没有元素。
  nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
*/

// Do not return anything, modify nums1 in-place instead.
// 双指针、创建数组，最后遍历修改nums1
// 双指针边界条件：各自满足小于需要遍历的数都能继续while，如果其中一个已经到头 那就只处理另一个
var merge = function(nums1, m, nums2, n) {
  let i = 0
  let j = 0
  const arr = new Array()
  let cur
  while (i < m || j < n) {
    if (i === m) {
      cur = nums2[j++]
    } else if (j === n) {
      cur = nums1[i++]
    } else if (nums1[i] < nums2[j]) {
      cur = nums1[i++]
    } else {
      cur = nums2[j++]
    }
    arr.push(cur)
  }
  for (let i = 0; i < arr.length; i++) {
    nums1[i] = arr[i]    
  }
}

// 逆向双指针,注意-1的判断
var merge = function(nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let tail = m + n - 1
  let cur
  while (i >= 0 || j >= 0) {
    if (i === -1) {
      cur = nums2[j--]
    } else if (j === -1) {
      cur = nums1[i--]
    } else if (nums1[i] > nums2[j]) {
      cur = nums1[i--]
    } else {
      cur = nums2[j--]
    }
    nums1[tail--] = cur
  }
}
var merge = function(nums1, m, nums2, n) {
  let i = 0
  let j = 0
  const arr = new Array(m + n).fill(0)
  let cur = null
  while (i < m || j < n) {
    if (i === m) {
      cur = nums2[j]
      j++
    } else if (j === n) {
      cur = nums1[i]
      i++
    } else if (nums1[i] < nums2[j]) {
      cur = nums1[i]
      i++
    } else {
      cur = nums2[j]
      j++
    }
    arr[i + j - 1] = cur
  }
  for (let x = 0; x < nums1.length; x++) {
    nums1[x] = arr[x]
  }
};