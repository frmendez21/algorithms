const fourNumberSum = (array, targetSum) => {
    const sums = {};
	const results = [];
	for(let i = 0; i < array.length; i++) {
		for(let j = i + 1; j < array.length; j++) {
			const sum = array[i] + array[j];
			const diff = targetSum - sum;
			if(diff in sums) {
				sums[diff].forEach(arr => results.push(arr.concat([array[i], array[j]])))
			}
		}
		for(let k = 0; k < i; k++) {
			const curr = array[k] + array[i];
			if(!(curr in sums)) {
				sums[curr] = [[array[i], array[k]]];
			} else {
				sums[curr].push([array[i], array[k]]);
			}
		}
	}
	return results;
}
console.log(fourNumberSum([7, 6, 4, -1, 1, 2], 16))
