// Given an integer n, return the least number of perfect square numbers that sum to n.

// A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

const numSquares = n => {
    let squares = [];
    for(let i = 1; i * i < n; i++ ) {
        squares.push(i * i)
    }
    return traverse(n, squares)
};

const traverse = (n, squares) => {
    let hi = squares.length - 1;
    let lo = squares.length - 1;
    let res = [];
    
    while(hi >= 0) {
        let sum = squares[lo] + squares[hi];
        if(sum < n) {
            res.push(squares[hi])
            sum += squares[hi]
            lo++;
        } 
        if(sum > n) {
            sum -= squares[lo];
            hi--;
        }
        if(sum === n) {
            break;
        }
        console.log(hi)
    }
    return res;
}
console.log(numSquares(13))
