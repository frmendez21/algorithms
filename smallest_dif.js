const smallestDifference = (arrayOne, arrayTwo) => {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);

    let [i, j] = [0, 0];
    let smallest = Infinity;
    let result;
    while(i < arrayOne.length && j < arrayTwo.length) {
        let diff = Math.abs(arrayOne[i] - arrayTwo[j]);
        if(diff < smallest) {
            smallest = diff;
            result = [arrayOne[i], arrayTwo[j]]
        } 
        if(diff === 0) {
            return result;
        }
        arrayOne[i] < arrayTwo[j] ? i++ : j++;
    }
    return result
};

const a1 = [-1, 5, 10, 20, 28, 3];
const a2 = [26, 10, 135, 15, 17];
console.log(smallestDifference(a1, a2)) // [28, 26]