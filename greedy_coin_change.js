function minCoinChange(coins, amount) {
    coins.sort((a, b) => b - a);
    const result = [];

    for(let i = 0; i < coins.length; i++) {
        if(amount <= 0) break;

        if((coins[i] <= amount) && (amount-coins[i] >= 0)) {
            amount = amount - coins[i]
            result.push(coins[i])
            i = -1;
        }
    }
    return result;
}

const minCoinChangeRec = (coins, amount, res=[]) => {
    if(!res.length) coins.sort((a, b) => b - a);

    if(amount <= 0 || !coins.length) return res;

    if((coins[0] <= amount) && (amount - coins[0] >= 0)) {
        amount -= coins[0];
        res.push(coins[0])
    } else {
        coins = coins.slice(1);
    }

    return minCoinChangeRec(coins, amount, res);
}

const coins = [1, 2, 5];
console.log(minCoinChangeRec(coins, 11))// 3