const dynamicFib = (n, memo={}) => {
    if(memo[n]) return memo[n];
    if(n <= 2) return 1;

    memo[n] = dynamicFib(n - 1, memo) + dynamicFib(n - 2, memo);
    return memo[n]
};

console.log(dynamicFib(4))