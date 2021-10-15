function boggleBoard(board, words) {
    let trie = new Trie();
    words.forEach(word => trie.addWords(word));
    console.log(trie)
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
const words = ["this", "is", "not", "a", "simple", "boggle", "board", "test", "REPEATED", "NOTRE-PEATED"]

console.log(boggleBoard(arr, words))