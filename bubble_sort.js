const bubbleSort = (array, comparator) => {
    let loop = true;

    if(typeof comparator !== 'function') {
        comparator = (a, b) => a - b;
    };

    while(loop) {
        loop = false;
        for(let i = 0; i < array.length; i++) {
            for(let j = i + 1; j < array.length; j++) {
                if(comparator(array[i], array[j]) > 0) {
                    let temp = array[i];
                    array[i] = array[j]
                    array[j] = temp;
                    loop = true;
                }
            }
        }
    }
    return array;
};

