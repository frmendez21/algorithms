
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

   populateSuffixTrieFrom(string) {
    // Write your code here.
		for(let i = 0; i < string.length; i++) {
			this.addWord(string.slice(i))
		}
  }
	
	addWord(word, idx=0) {
		if(idx === word.length) {
            this.root
        }
	}

  contains(string) {
    // Write your code here.
  }
}

const st = new SuffixTrie()
st.populateSuffixTrieFrom("babc")