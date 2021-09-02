const moveElementToEnd = (array, toMove) => {
    let end = array.length - 1;
    let start = 0;
    while(start < end) {
        if(array[start] === toMove && array[end] !== toMove) {
            [array[start], array[end]] = [array[end], array[start]];
            end --;
        } else if((array[start] !== toMove && array[end] === toMove) || (array[start] === toMove && array[end] === toMove)) {
            end--;
        } else {
            start ++;
        }
    }
    return array;
}
const arr = [2, 1, 2, 2, 2, 3, 4, 2];
const m = 2;
console.log(moveElementToEnd(arr, m));
// 2 1 2 2 2 3 4 2 