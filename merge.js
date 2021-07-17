const merge = (arr1, arr2, comparator) => {
    if(typeof comparator !== 'function') comparator = (a, b) => a - b;
    const result = [];
    let i = 0; 
    let j = 0; 

    while(i < arr1.length && j < arr2.length) {
        if(comparator(arr1[i], arr2[j]) <= 0) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while( i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
   return result
}
let arr1 = [1, 3, 4 , 5];
let arr2 = [2, 4, 6, 8];

let arr3 = [-2, -1, 0, 4, 5, 6]
let arr4 = [-3, -2, -1, 2, 3, 5, 7, 8]

let arr5 = [3, 4, 5]
let arr6 = [1, 2]

let arr7 = ["Bob", "Ethel", "Christine"]
let arr8 = ["M", "Colt", "Allison", "SuperLongNameOMG"]

let strLenCompare = (str1, str2) => str1.length - str2.length;

// console.log(merge(arr1, arr2))
// console.log(merge(arr3, arr4))
// console.log(merge(arr5, arr6))
// console.log(merge(arr7, arr8, strLenCompare))