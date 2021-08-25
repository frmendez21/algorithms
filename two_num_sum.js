const twoNumberSum = (array, targetSum) => {
    const memo = {};
    const res = []
    for(let i = 0; i < array.length; i++) {
        const p = targetSum - array[i];
        if(p in memo) {
            res.push(p, array[i])
        } else {
            memo[array[i]] = true;
        }
    }
    return res;
    
}

// -4 -1  1  3  5  6  8  11

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))