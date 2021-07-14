// [1556, 4, 3556, 493, 408, 4386, 902, 7, 8157, 86, 9637, 29]

// buckets 
//                          86
//                        4386 8157
//                        3556 9637 4386                   
//         902 493  4     1556  7   408  29
// 0    1   2   3   4   5   6   7   8   9

// [902, 593, 4, 1556, 3556, 4386, 86, 7 8157, 9637, 408, 29]

// look at last number group into respective bucket, look at next number to left repeat, if no number ie single digit number put in 0 bucket
// reform list in new order every time

// helper methods
// returns number at position

// getDigit (num, pos)
// getDigit(12345, 0) => 12345 / 10^0 = 12345 % 10 = 5 
// getDigit(12345, 1) => 12345 / 10^1 = 1234.5 % 10 = 4
const getDigit = (num, pos) => Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;

// console.log(getDigit(10, 4));

// digitCount (1) // 1
// digitCount(25) // 2
// returns num of digts in number
const digitCount = n => n === 0 ? 1 : Math.floor(Math.log10(Math.abs(n))) + 1;

const mostDigits = nums => {
    let max = 0;
    nums.forEach(n => {
        max = Math.max(max, digitCount(n))
    });
    return max;
};

function radixSort(nums) {
  const most = mostDigits(nums);
  let k = 0;
  while (k < most ){
      let newArr = Array.from(Array(10), () => [])
      for(let i = 0; i < nums.length; i++) {
          const kthDigit = getDigit(nums[i], k);
          newArr[kthDigit].push(nums[i])
      }
      nums = [].concat(...newArr)
      k ++;
  }
  return nums;
}
console.log(radixSort([6, 6, 1, 12]))
