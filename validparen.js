var isValid = function(s) {
    if(s.length <= 1) return false;
    const hash = {
        ']': '[',
        ')': '(',
        '}': '{'
    };
    const stack = [];
    for(let c of s) {
        if(!(c in hash)) {
            stack.push(c);
        } else {
            if(hash[c] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false
            }
        }
    }
    return stack.length === 0;
};
