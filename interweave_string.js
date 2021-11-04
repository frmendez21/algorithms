// Given a triplet of strings s1, s2, s3. Determine whether third string is result of interweaving first two. 

const isInterweaved = (s1, s2, s3) => {
    // take the count of both s1 and s2 
    // iterate over s3 and check each char, if char exists in s1 reduce s1 count, same with s2 if both are equal to 0 at the end then return true
    // {a: 0, b:0}
    // {c: 0, b: 0, a: 0}
    // 
    const s1Hash = {};
    const s2Hash = {};
    for(const ch1 of s1) {s1Hash[ch1] = ch1 in s1Hash ? s1Hash[ch1] + 1 : 1 };
    for(const ch2 of s2) {s2Hash[ch2] = ch2 in s2Hash ? s2Hash[ch2] + 1 : 1 };

    for(const ch3 of s3) {
        if(ch3 in s1Hash && s1Hash[ch3] > 0) {
            s1Hash[ch3] -= 1;
        } else if(ch3 in s2Hash) {
            s2Hash[ch3] -= 1;
        }
    }

    const checkS1 = Object.values(s1Hash).every(val => val === 0);
    const checkS2 = Object.values(s2Hash).every(val => val === 0);

    return checkS1 && checkS2;
}
// time: O(n)
// space: O(n)
console.log(isInterweaved("", "", "")) // true
console.log(isInterweaved("a", "", "a")) // true
console.log(isInterweaved("", "b", "a")) // false
console.log(isInterweaved("aab", "cba", "acabba")) // true
console.log(isInterweaved("aabcc", "dbbca", "aaadbbbacc")) // false