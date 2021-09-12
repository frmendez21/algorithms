function maxSumIncreasingSubsequence(array) {
  // Write your code here.
	const table = array.slice();
  const seq = Array(array.length);
	let maxIdx = 0;
	for(let i = 0; i < table.length; i++) {
		for(let j = 0; j < i; j++) {
			if(array[i] > array[j]) {
				const sum = array[i] + table[j];
				if(sum >= table[i]) {
					seq[i] = j;
					table[i] = sum;
				};
			};
		};
		if(table[i] >= table[maxIdx]) maxIdx = i;
	};
	return [table[maxIdx], buildSeq(array, seq, maxIdx)]
};

const buildSeq = (array, seq, currIdx) => {
	const sequence = [];
	while(currIdx !== undefined) {
		sequence.unshift(array[currIdx]);
		currIdx = seq[currIdx];
	}
	return sequence;
}
