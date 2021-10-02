function zigzagTraverse(array) {
  // Write your code here.
	const result = [];
	const matrixHW = (array[0].length * array.length);
	let dir = 'down';
	let i = 0; 
	let j = 0;
	while(result.length < matrixHW) {
		if(i < 0 || j < 0 || i > array.length - 1 || j > array[0].length - 1) break;
		result.push(array[i][j])
		if(dir === 'down' && array[i + 1] && array[i + 1][j - 1] != null){
			 i += 1;
			 j -= 1;
		} else if(dir === 'up' && array[i - 1] && array[i - 1][j + 1] != null) {
			i -= 1;
			j += 1;
		} else if(dir === 'up' && array[i][j + 1] != null) {
			j += 1;
			dir = 'down'
		} else if(dir === 'down' && array[i + 1] && array[i + 1][j] != null) {
			i += 1;
			dir = 'up';
		} else if(dir === 'up' && array[i + 1] && array[i + 1][j] != null) {
			i += 1;
			dir = 'down';
		} else if(dir === 'down' && array[i][j + 1] != null) {
			j += 1;
			dir = 'up';
		}
	}
	return result;
}
