// given two strings, decide if one is a permutation of the other
// Approach 1
    // sort both string and check if each char is same 
    // runTime = O(n + m + n log n + m log m ) = O(n log n + m log m)
const checkPermsSort = (str1, str2) => {
    if(str1.length !== str2.length) return false
    str1 = str1.split('').sort()
    str2 = str2.split('').sort()
    for(let i = 0; i < str1.length; i++) {
        if(str1[i] !== str2[i]) return false;
    };
    return true;
};
// Approach 2
    // init a new map object
    // add each val in str1 to map v = 1 or map[v] + 1
    // iterate str2 if c in str2 not in map return false
    // else delete c in map 
    // return if size is 0, size would be 0 if it is a perm
    // runtime = O(n + m), space = O(n)
const checkPermsMap = (str1, str2) => {
    if(str1.length !== str2.length) return false;
    const chars = new Map();

    for(let i = 0; i < str1.length; i++) {
        chars.has(str1[i]) ? chars.set(str1[i], chars.get(str1[i]) + 1) : chars.set(str1[i], 1);
    }
    for(let j = 0; j < str2.length; j++) {
        const c = chars.get(str2[j]);
        if(!c) return false

        c === 1 ? chars.delete(str2[j]) : chars.set(str2[j], c - 1);
    }
    return chars.size === 0;
};


// true
console.log(checkPermsSort('abcdefghi', 'ihgfedcba'))
console.log(checkPermsSort('1a1', 'a11'))
//false
console.log(checkPermsSort('abcdefghiz', 'ihgfedcbaa'))
console.log(checkPermsSort('1a1', '11'))
// true
console.log(checkPermsMap('abcdefghi', 'ihgfedcba'))
console.log(checkPermsMap('1a1', 'a11'))
//false
console.log(checkPermsMap('abcdefghiz', 'ihgfedcbaa'))
console.log(checkPermsMap('1a1', '11'))



