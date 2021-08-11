const memoFib = (n, memo={}) => {
    if(memo[n]) return memo[n];
    if(n <= 2) return 1;

    memo[n] = memoFib(n - 1, memo) + memoFib(n - 2, memo);
    return memo[n]
};

const tabFib = (n) => {
    if(n <= 2) return 1;
    const fibNums = [0, 1, 1];
    for(let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n]
}
console.log(memoFib(4))
console.log(tabFib(4))