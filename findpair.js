// given unsorted array and a number n find if pair of elements exists whose diff is n, T/F

const findPair = (array, n) => {
    const diffs = new Set();

    for(let i = 0; i < array.length; i++) {
        if(diffs.has(array[i])) return true;

        diffs.add(array[i] - n)
        diffs.add(array[i] + n)
    }
    return false
};

console.log(findPair([6,1,4,10,2,4], 2))
console.log(findPair([8,6,2,4,1,0,2,5,13], 1))
console.log(findPair([4,-2,3,10], -6))
console.log(findPair([6,1,4,10,2,4], 22))
console.log(findPair([], 0))
console.log(findPair([5,5], 0))
console.log(findPair([-4,4], -8))