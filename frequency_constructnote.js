const constructNote = (message, letters) => {
    const letCount = {};

    for(let i = 0; i < letters.length; i++) {
        if(!letCount[letters[i]]) {
            letCount[letters[i]] = 1;
        } else {
            letCount[letters[i]] += 1;
        }
    } 

    for(let i = 0; i < message.length; i++) {
        if(letCount[message[i]] === 0 || !letCount[message[i]]) {
            return false;
        } else {
            letCount[message[i]] -= 1;
        }
    }
    return true;
}

// return true if message can be built with letters given else false

console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba')) // true
console.log(constructNote('aabbcc', 'bcabcaddff')) // true