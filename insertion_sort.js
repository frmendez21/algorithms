const insertionSort = (array, comparator) => {
    if(!comparator) {
        comparator = (a, b) => {
            if(a < b) return -1;
            if(a > b) return 1;
            return 0;
        }
    }
    
    for(let i = 1; i < array.length; i++) {
        const curr = array[i];
        let j = i - 1;
        for(j; j >= 0 && comparator(array[j], curr) > 0; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = curr;
    }
    return array;
};

console.log(insertionSort([4, 20, 12, 10, 7, 9]))