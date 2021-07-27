class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        const PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            const char = key[i];
            const val = char.charCodeAt(0) - 96;
            total = (total * PRIME + val) % this.keyMap.length;
        }
        return total;
    }

    set(key, val) {
        const hashedKey = this._hash(key);
        if(!this.keyMap[hashedKey]) {
            this.keyMap[hashedKey] = [];
        } 
        this.keyMap[hashedKey].push([key, val]);
    }

    get(key) {
        const hashedKey = this._hash(key);
        if(!this.keyMap[hashedKey]) return;
        for(let i = 0; i < this.keyMap[hashedKey].length; i++) {
            if(this.keyMap[hashedKey][i][0] === key) return this.keyMap[hashedKey][i][1];
        }
    }

    keys() {
        // return array of keys in table
        const result = [];
        this.keyMap.forEach(key => {
            if(Array.isArray(key)) {
                for(let i = 0; i < key.length; i++) {
                    result.push(key[i][0])
                }
            }
        })
        return result;
    }

    values() {
        // return array of values in table
        const result = [];
        this.keyMap.forEach(key => {
            if(Array.isArray(key)) {
                for(let i = 0; i < key.length; i++) {
                    result.push(key[i][1])
                }
            }
        })
        return result;
    }
}

const ht = new HashTable();
ht.set('blue', '#0000FF');
ht.set('red', '#FF0000');
console.log(ht.values());