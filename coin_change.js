const coinChange = (coins, value) => {
    
    const table = Array(value + 1).fill(0);
    table[0] = 1;

    for(let i = 0; i < coins.length; i++) {
        for(let j = coins[i]; j <= value; j++) {
            table[j] += table[j - coins[i]]
        }
    }
    return table[table.length - 1];
};

const coins = [1, 5, 10, 25];
console.log(coinChange(coins, 25))