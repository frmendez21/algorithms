const findAllDuplicates = array => {
    const counter = {};
    const res = [];

    array.forEach(el => {
        if(!counter[el]) {
            counter[el] = 1;
        } else {
            counter[el] ++ ;
        }

        if(counter[el] === 2) res.push(el)
    });

    return res;

};

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))
console.log(findAllDuplicates([4, 3, 2, 1, 0]))
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]))