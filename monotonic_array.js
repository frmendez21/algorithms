const isMonotonic = array => {
    if(array.length <= 1) return true;
    let direction = '';

    for(let i = 0; i < array.length - 1; i++) {
        if(!direction.length && array[i] > array[i + 1]) {
            direction ='DESC';
        } 
        if(!direction.length && array[i] < array[i + 1]) {
            direction = 'ASC';
        }

        if(direction === 'ASC') {
            if(array[i] > array[i + 1]) {
                return false;
            }
        }
        if(direction === 'DESC') {
            if(array[i] < array[i + 1]) {
                return false;
            }
        }
    }
    return true;
}
console.log(isMonotonic([-1, -5, -10, -1100, -1101, -1102, -9001]))
console.log(isMonotonic([2, 1]))