const findRotatedIndex = (arr, target, start=0, end=arr.length - 1) => {
    const mid = Math.floor((start + end) / 2);
    if(start > end) return -1;

    if(arr[mid] === target) return mid;

    if(arr[start] <= arr[mid]) {
        if(arr[start] <= target && arr[mid] > target) {
            return findRotatedIndex(arr, target, start, mid)
        } else {
            return findRotatedIndex(arr, target, mid + 1, end)
        }
    } else {
        if(arr[mid] < target && arr[end] >= target) {
            return findRotatedIndex(arr, target, mid + 1, end) 
        } else {
            return findRotatedIndex(arr, target, start, mid)
        }
    }
};

console.log(findRotatedIndex([3,4,1,2], 4)) // 1
//                                   m 
// if target less than m - 1 search right, else search left

console.log(findRotatedIndex([6,7,8,9,1,2,3,4], 8)) // 2
//                                    m 
console.log(findRotatedIndex([6,7,8,9,1,2,3,4], 3)) // 6
//                                       m
console.log(findRotatedIndex([37,44,66,102,10,22], 14)) // -1
//                                      m 
console.log(findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16)) // 5
//                                            m 
// console.log(findRotatedIndex([]))
// console.log(findRotatedIndex([]))
// console.log(findRotatedIndex([]))