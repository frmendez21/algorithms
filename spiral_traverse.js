function spiralTraverse(array) {
  // Write your code here.
    if(array.length <= 1) return array[0];
	let startRow = 0;
	let startCol = 0;
	let endCol = array[0].length - 1;
	let endRow = array.length - 1;
    let lower = 0;
    let max = (array[0].length * (array.length));
	const res = [];

    while(startRow <= endRow && startCol <= endCol) {
        
        for(startCol; startCol < endCol; startCol++) {
            res.push(array[startRow][startCol]);
        }
        for(startRow; startRow < endRow; startRow++) {
            res.push(array[startRow][startCol])
        }
        for(startCol; startCol > lower; startCol--) {
            res.push(array[startRow][startCol])
            if(res.length === max) break; 
        }
        for(startRow; startRow > lower; startRow --) {
            res.push(array[startRow][startCol])
            if(res.length === max) break;
        }

        if(startRow === endRow && endRow === startCol && startCol === endCol) {
            res.push(array[startRow][startCol])
        }

        lower ++;
        endRow--;
        endCol--;
        startRow++;
        startCol++;
    }
	return res;
}

console.log(spiralTraverse([
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]
]))

console.log(spiralTraverse([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
  ]))

console.log(spiralTraverse([
    [1],
    [3],
    [2],
    [5],
    [4],
    [7],
    [6]
  ]))