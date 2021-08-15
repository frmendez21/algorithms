const coinChange = (coins, value, m=coins.length) => {
    if(value == 0) return 1;

    if(value < 0) return 0;

    if(m <= 0 && value >= 1) return 0

    return coinChange(coins, value, m - 1) + coinChange(coins, value - coins[m - 1], m)
};

const coins = [1, 5, 10, 25];
console.log(coinChange(coins, 5)) // 2
console.log(coinChange(coins, 10)) // 4