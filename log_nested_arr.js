




const logNestedArr = (string, array, depth=[]) => {
    const depthString = depth.join('.');
    for(let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
            depth.push(i);
            logNestedArr(string, array[i], depth)
        } else {
            if(depth.length === 0) {
                console.log(`${string}.${i}: ${array[i]}`);
            } else {
                console.log(`${string}.${depthString}.${i}: ${array[i]}`);
            }
        }
    }
    depth.pop();
}

console.log(logNestedArr('Foo', ['a string', ['a', 'b', 'c', ['d']], 'span', ['word']]))