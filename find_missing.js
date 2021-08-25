const findDisappearedNumbers = nums => {

    let res = [];
    for(let i = 0; i < nums.length; i++) {
        let idx = Math.abs(nums[i]) - 1;

        nums[idx] = Math.abs(nums[idx]) * -1;
    }

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) res.push(i + 1)
    }
    return res;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))