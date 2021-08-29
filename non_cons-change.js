const nonConstructibleChange = (coins) => {
    let change = 0;
    coins.sort((a, b) => a - b);
    for(let i = 0; i < coins.length; i++) {
        if(coins[i] > change + 1) {
            return change + 1;
        } else {
            change = change + coins[i];
        }
    }
    return change + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))
console.log(nonConstructibleChange([1, 1, 1, 1, 1]))
// input: array of pos integers (non-unique)
// output: min amt of change(min sum of money) you cannot create
// [1, 2, 5] = 4
// [] = 1;

// [5, 7, 1, 1, 2, 3, 22]
// 1, 1, 2, 3, 5, 7, 22
