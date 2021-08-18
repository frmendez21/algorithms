class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }

    addWord(word, index = 0) {

        if(word.length === index) {
            this.isWord = true;
        } else {
            let char = word[index];
            let subTrie = this.characters[char] || new Trie();
            subTrie.addWord(word, index + 1);
            this.characters[char] = subTrie;
        }
        return this;
    }
}

const t = new Trie();
t.addWord('fun')
console.log(t.characters.f.characters.u.characters.n)
