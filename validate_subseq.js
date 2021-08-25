const isValidSubsequence = (array, sequence) => {
    if(array.length <= 1) return true;
    let j = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] === sequence[j]) {
            j++;
        }
    }
    return j === sequence.length
}

// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 2, 6, -1, 10]))
// input two arrays of ints
// output determine whether second arr is subseq of first
// subseq: set of nums not adjacent but in same order 
// [1, 3, 4] and [2, 4] subsequence of [1, 2, 3, 4] 


// 5 1 22 25 6 -1 8 10 || 1 6 -1 10
//   1       2  3    4    1 2  3  4

// have a variable that tracks subsequence idx
// go through array if we go through it without finding all idxs its falls