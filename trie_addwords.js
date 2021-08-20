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

    findWord(word) {
        let char = word[0];
        if(word.length === 0 || !this.characters[char]) {
            return;
        } else if(word.length === 1) {
            return this.characters[word];
        } else {
            let subTrie = this.characters[char];
            return subTrie.findWord(word.slice(1));
        }
    }

    getWords(word="", result=[]) {
        let keys = Object.keys(this.characters);
        if(this.isWord) {
            result.push(word)
            return result;
        } else if(!this.isWord && keys.length > 0) {
            for(let c in this.characters) {
                let subTrie = this.characters[c];
                word += c;
                return subTrie.getWords(word, result);
            }
        } 
        // return result;
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
// t.removeWord('fat')
// console.log(t.characters.f.characters.a.characters.t.characters.h.characters.e.characters.r)
// console.log(t.characters.f.characters.a.characters.t)
// console.log(t.findWord('father'))
console.log(t.getWords())