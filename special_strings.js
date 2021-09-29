function specialStrings(strings) {
  // Write your code here.
	const trie = new Trie();
	strings.forEach(str => trie.insert(str));
    return strings.filter(str => trie.isSpecial(str, 0, 0));
}

class Trie {
	constructor() {
		this.chars = {};
		this.isWord = false;
	}
	insert(val, idx=0) {
		if(val.length === idx){
			this.isWord = true;
		} else {
			let currentChar = val[idx];
			let subTrie = this.chars[currentChar] || new Trie();
			subTrie.insert(val, idx + 1);
			this.chars[currentChar] = subTrie;
		}
		return this;
	}
    isSpecial(word, idx, count) {
        const currChar = word[idx];
        if(!(currChar in this.chars)) return false;
        const currNode = this.chars[currChar];
        if(word.length - 1 === idx) {
            if(currNode.isWord && (count + 1) >= 2) return true;
        }
        if(currNode.isWord) {
            const checkRest = currNode.isSpecial(word, idx + 1, count + 1);
            if(checkRest) return true;
        }
        return currNode.isSpecial(word, idx + 1, count)
    }
}




console.log(specialStrings(["foobarbaz", "foo", "bar", "foobarfoo", "baz", "foobaz", "foofoofoo", "foobazar"]))