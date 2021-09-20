function removeIslands(matrix) {
  // Write your code here.
	const boolMatrix = Array.from(Array(matrix.length), () => Array(matrix[0].length).fill(false));
	traverseBorder(matrix, boolMatrix);
	for(let i = 1; i < matrix.length - 1; i ++) {
		for(let j = 1; j < matrix[0].length - 1; j++) {
			if(matrix[i][j] === 1 && !boolMatrix[i][j]) matrix[i][j] = 0;
		}
	}
	return matrix;
}

function traverseBorder(matrix, boolMatrix) {
	for(let i = 0; i < matrix[0].length; i++) {
		if(matrix[0][i] === 1) traverseIsland(matrix, boolMatrix, 0, i)
	}
	for(let i = 0; i < matrix.length; i++) {
		if(matrix[i][matrix[0].length - 1] === 1) traverseIsland(matrix, boolMatrix, i, matrix[0].length - 1)
	}
	for(let i = matrix[0].length - 1; i >= 0; i--) {
		if(matrix[matrix.length - 1][i] === 1) traverseIsland(matrix, boolMatrix, matrix.length -1, i);
	}
	for(let i = matrix.length - 1; i >= 0; i--) {
		if(matrix[i][matrix.length - 1] === 1) traverseIsland(matrix, boolMatrix, i, 0)
	}
}
function traverseIsland(matrix, boolMatrix, i, j) {
	if(i >= matrix.length || j >= matrix[0].length || i < 0 || j < 0 || boolMatrix[i][j] || matrix[i][j] !== 1) return;
	boolMatrix[i][j] = true;
	traverseIsland(matrix, boolMatrix, i - 1, j);
	traverseIsland(matrix, boolMatrix, i + 1, j);
	traverseIsland(matrix, boolMatrix, i, j - 1);
	traverseIsland(matrix, boolMatrix, i, j + 1);
}
 const matrix = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1]
];
console.log(removeIslands(matrix))
/*
    output: 
    [
        [1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 1, 0],
        [1, 1, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 1]
    ]
*/

/* README: 
    This function is a question from AlgoExpert which I was able to solve in under 45 minutes. The prompt is to take a matrix and remove all of the 1's that are considered 'islands'. Islands are defined as any number of 1s that are horizontally or vertically adjacent, and don't touch the border of the matrix (ie: first row, fist col, last row last col). I solved this using a boolean matrix that started with all positions set to false. I then traversed the border of the matrix and found all of the 1s on the border, when I found a 1 I would perform a depth first search to find the rest of the 1s connected to the 1 on the border and set all of them to true. I then traversed the inner portion of the matrix and set all of the 1s to 0s if they were still false in the boolean matrix. 
    Time complexity: O(nm) - where n is the matrix's width and m is the height
    Space complexity: O(nm) - where n is the matrix's width and m is the height
*/