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

    removeWord(word) {
        if(word.length === 0) {
            this.isWord = false;
        } else {
            let char = word[0];
            let subTrie = this.characters[char];
            subTrie.removeWord(word.slice(1));
            if(Object.keys(subTrie.characters).length === 0 && !this.isWord) {
                delete this.characters[char]
            }
        }
        return this;
    }
}

const t = new Trie();
t.addWord('fun')
t.addWord('fast')
t.addWord('fat')
t.addWord('fate')
t.addWord('father')
t.addWord('forget')
t.addWord('awesome')
t.addWord('argue')
t.removeWord('fat')
console.log(t.characters.f.characters.a.characters.t)
