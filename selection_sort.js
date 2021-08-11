const selectionSort = (array, comparator)=> {
    if(!comparator) {
        comparator = (a, b) => {
            if(a < b) return -1;
            if(a > b) return 1;
            return 0;
        };
    };

    for(let i = 0; i < array.length; i++) {
        let min = i;
        let swap = false;
        for(let j = i + 1; j < array.length; j++) {
            if(comparator(array[j], array[min]) < 0) {
                swap = true;
                min = j;
            }
        }
        if(swap) {
            [array[i], array[min]] = [array[min], array[i]]
        }
    }
    return array;
};

console.log(selectionSort([4, 20, 12, 10, 7, 9]))