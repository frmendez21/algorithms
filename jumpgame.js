// const canJump = (array, validIndex=array.length - 1, checkIndex=array.length - 1)=> {
    // if(!array.length) return false;
    // const sum = array[checkIndex] + checkIndex;
    // if(sum >= validIndex) validIndex = checkIndex;
    // if(validIndex === 0) return true;
    // return canJump(array.slice(0, array.length - 1), validIndex, checkIndex - 1)
// };
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