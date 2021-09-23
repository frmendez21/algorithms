class Trie {
    constructor() {
        this.characters = {};
        this.endWord = false;
    }
}
class MagicDictionary{
    constructor() {
        this.root = new Trie();
    }

    buildDict(dictionary) {
        for(let word of dictionary) {
            let node = this.root;
            for(let letter of word) {
                let chars = node.characters;
                if(!(letter in chars)) chars[letter] = new Trie();
                node = chars[letter];
            }
            node.endWord = true;
        }
    };
};

const magicDictionary = new MagicDictionary();
magicDictionary.buildDict(["hello", "leetcode"]);
console.log(magicDictionary.root)