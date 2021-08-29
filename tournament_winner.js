const tournamentWinner = (competitions, results) => {
    const res = {};
    let winner;
    for(let i = 0; i < competitions.length; i++) {
        if(results[i] === 0) {
            res[competitions[i][1]] = res[competitions[i][1]] + 1 || 1;
            if(!winner || res[winner] < res[competitions[i][1]]) {
                winner = competitions[i][1];
            } 
        } else {
            res[competitions[i][0]] = res[competitions[i][0]] + 1 || 1;
            if(!winner || res[winner] < res[competitions[i][0]]) {
                winner = competitions[i][0];
            } 
        }
    }
    return winner;
}

// input: array of pairs representing teams that have competed against each other['home', 'away'] and array containing results of each competition
// output: winner of competition
const competitions = [
    ['HTML', 'C#'], 
    ['C#', 'Python'], 
    ['Python', 'HTML']
]
const results = [0, 0, 1]
console.log(tournamentWinner(competitions, results)) // Python
// iterate over competitions
// check result [i] if 0 competitions[1] is winner else competitions[0] is winner
