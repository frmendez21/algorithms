
const canJump = array => {
    let validIdx = array.length - 1;
    for(let i = array.length -2; i >= 0; i--) {
        const sum = array[i] + i;
        if(sum >= validIdx) validIdx = i;
    }
    return validIdx === 0 ? true : false;
}
console.log(canJump([3, 2, 1, 0, 4]))
console.log(canJump([2,3,1,1,4]))