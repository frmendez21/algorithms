const jump = (nums) => {
    let max = 0;
    let count = 0;
    let b = 0;
    for (let i=0;i<nums.length-1;i++) {
        max = Math.max(max, i+nums[i]);
        if(i >= max) return -1
        console.log(max, count, b, i)
        if (i === b) {
            count++;
            b = max;
        }
    }
    return count;
}
// console.log(jump([2, 3, 1, 1, 4]))
// console.log(jump([2,3,0,1,4]))
console.log(jump([5,9,3,2,1,0,2,3,3,1,0,0]))
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// 0     1     2     3     4 
// 2     3     1     1     4 
// 2     4     3     4     8 


// [5,9,3,2,1,0,2,3,3,1,0,0]
// 0   1   2   3   4   5   6   7   8   9   10  11
// 5   9   3   2   1   0   2   3   3   1   0   0
// 5   10  5   5   5   5   8   10  11  10  10  11
//c1                   c2  
//b5                   b5