function boggleBoard(board, words) {
    const trie = new Trie();
    const boggleWords = [];
    words.forEach(word => trie.addWords(word));
    const boolMatrix = Array.from(Array(board.length), x => Array(board[0].length).fill(false));
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(trie.chars[board[i][j]]) {
                const word = findWords(board, boolMatrix, i, j, trie.chars[board[i][j]], board[i][j])
                if(word) boggleWords.push(word)
            }
        }
    }
    return boggleWords;
}

function findWords(board, boolMatrix, i, j, trie, word='') {
    if(i < 0 || j < 0 || i > board.length || j > board[0].length || boolMatrix[i][j]) return;
    boolMatrix[i][j] = true;
    if(trie.isWord) return word;
    
    console.log(word)
    const down = board[i + 1] ? board[i + 1][j] : null;
    const up = board[i - 1] ? board[i - 1][j] : null;
    const left = board[i][j - 1];
    const right = board[i][j + 1];
    const downRight = board[i + 1 ] ? board[i + 1][j + 1] : null;
    const downLeft = board[i + 1] ? board[i + 1][j - 1] : null;
    const upLeft = board[i - 1] ? board[i - 1][j - 1] : null;
    const upRight = board[i -1] ? board[i - 1][j + 1] : null;
     if(left && trie.chars[left] && !boolMatrix[i][j - 1]) {
        word += left;
        return findWords(board, boolMatrix, i, j - 1, trie.chars[left], word)
    } 
    if(right && trie.chars[right]) {
        word += right;
        return findWords(board, boolMatrix, i, j + 1, trie.chars[right], word)
    } 
    if(down && trie.chars[down]) {
        word += down;
        return findWords(board, boolMatrix, i + 1, j, trie.chars[down], word)
    } 
    if(up && trie.chars[up]) {
        word += up;
        return findWords(board, boolMatrix, i - 1, j, trie.chars[up], word)
    } 
    if(downRight && trie.chars[downRight]) {
        word += downRight;
        return findWords(board, boolMatrix, i + 1, j + 1, trie.chars[downRight], word)
    } 
    if(downLeft && trie.chars[downLeft]) {
        word += downLeft;
        return findWords(board, boolMatrix, i + 1, j - 1, trie.chars[downLeft], word)
    } 
    if(upLeft && trie.chars[upLeft]) {
        word += upLeft;
        return findWords(board, boolMatrix, i - 1, j - 1, trie.chars[upLeft], word)
    } 
    if(upRight && trie.chars[upRight]) {
        word += upRight;
        return findWords(board, boolMatrix, i - 1, j + 1, trie.chars[upRight], word)
    } 
    
}

class Trie {
    constructor() {
        this.chars = {};
        this.isWord = false;
    }

    addWords(word, idx=0) {
        let currChar = word[idx];
        if(word.length === idx) {
            this.isWord = true;
        } else {
            let subTrie = this.chars[currChar] || new Trie();
            subTrie.addWords(word, idx + 1);
            this.chars[currChar] = subTrie;
        }
       return this;
    }

}

const arr = [
  ["t", "h", "i", "s", "i", "s", "a"],
  ["s", "i", "m", "p", "l", "e", "x"],
  ["b", "x", "x", "x", "x", "e", "b"],
  ["x", "o", "g", "g", "l", "x", "o"],
  ["x", "x", "x", "D", "T", "r", "a"],
  ["R", "E", "P", "E", "A", "d", "x"],
  ["x", "x", "x", "x", "x", "x", "x"],
  ["N", "O", "T", "R", "E", "-", "P"],
  ["x", "x", "D", "E", "T", "A", "E"]
];
const arr2 = [
    ["y", "g", "f", "y", "e", "i"],
    ["c", "o", "r", "p", "o", "u"],
    ["j", "u", "z", "s", "e", "l"],
    ["s", "y", "u", "r", "h", "p"],
    ["e", "a", "e", "g", "n", "d"],
    ["h", "e", "l", "s", "a", "t"]
  ]
const words2 = ["san", "sana", "at", "vomit", "yours", "help", "end", "been", "bed", "danger", "calm", "ok", "chaos", "complete", "rear", "going", "storm", "face", "epual", "dangerous"];

const words = ["this", "is", "not", "a", "simple", "boggle", "board", "test", "REPEATED", "NOTRE-PEATED"]

console.log(boggleBoard(arr2, words2))
