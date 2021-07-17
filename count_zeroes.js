const countZeroes = (array, start=0, end=array.length) => {
    if(start >= end) return 0;
    const mid = Math.floor((start + end) / 2);

    if(array[mid] === 0) {
        return (end - mid) + countZeroes(array, start, mid);
    } else {
        return countZeroes(array, mid + 1, end)
    }
};
// let a1 = [1, 1, 1, 1, 0, 0];
// 1 1 1 1 0 0 
//     m 
//          m
// let a2 = [1, 0, 0, 0, 0]; 
// let a3 = [0, 0, 0];
// let a4 = [1, 1, 1, 1];

// console.log(countZeroes(a1))
// console.log(countZeroes(a2))
// console.log(countZeroes(a3))
// console.log(countZeroes(a4))