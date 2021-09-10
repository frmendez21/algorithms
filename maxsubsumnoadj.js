function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
	if(!array.length) return 0;
	if(array.length < 3) return Math.max(...array)
	const table = array.slice();
	table[1] = Math.max(array[0], array[1]);
	for(let i = 2; i < table.length; i++) {
		table[i] = Math.max(table[i - 1], (array[i] + table[i - 2]));
	}
	return table[table.length - 1];
}