function numberOfWaysToTraverseGraph(width, height) {
  // Write your code here.
	const table = Array.from(Array(height), e => Array(width).fill(0));
	for(let i = 0; i < table[0].length; i++) table[0][i] = 1;
	for(let j = 0; j < table.length; j++) table[j][0] = 1;
	
	for(let i = 1; i < table.length; i++) {
		let row = i;
		for(let j = 1; j < table[0].length; j++) {
			let col = j;
			table[row][col] = table[row - 1][col] + table[row][col - 1]
		}
	}
	return table[table.length - 1][table[0].length - 1];
}