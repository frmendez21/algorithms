const rob = nums => {
    let table = [nums[0]];

    if(nums[0] > nums[1]) {
        table.push(nums[0])
    } else {
        table.push(nums[1])
    }
    for(let i = 2; i < nums.length; i++) {
        let prev = table[table.length - 2];
        let sum = nums[i] + prev;
        if(sum > table[i - 1]) {
            table.push(sum)
        } else {
            table.push(table[i - 1])
        }
    }
    return table[table.length - 1]

}

console.log(rob([8, 1, 3, 10, 7]))
console.log(rob([1,2,3,1]))
console.log(rob([2,7,9,3,1]))