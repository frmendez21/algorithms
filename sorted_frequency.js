const sortedFrequency = (array, target, start=0, end=array.length - 1) => {
    if(start > end) return -1;

    const mid = Math.floor((start + end) / 2);

    if(array[mid] === target) {
        let i = mid - 1;
        let j = mid + 1;
        let count = 1;
        while(array[i] === target) {
           count ++;
           i --;
        };
        while (array[j] === target) {
            count ++; 
            j++;
        }
        return count;
    } else if (array[mid] < target ) {
        return sortedFrequency(array, target, mid + 1, end);
    } else if (array[mid] > target) {
        return sortedFrequency(array, target, start, mid) ;
    }
};

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2))  // 4
//                                    m 
// if left of m is same iterate/count to left of m
// if right of m is same iterate/count to right of m 
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3))  // 1 
//                                    m 
// if mid less than target search m + 1 to end 
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)) // 2
//                                    m 
// if  mid is greater than target search start to mid
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)) // -1