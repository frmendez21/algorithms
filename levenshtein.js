// write a function that takes two strings and returns the minimum # of edit operations that need to be performed on first string to optain second, edit operations: insert char, delete char, sub char

function levenshteinDistance(str1, str2) {
  // build a 2d array rows = str1 + 1, cols = str2 + 1, initialize first row col to respective index 
  const table = Array.from(Array(str1.length + 1), e => Array(str2.length + 1).fill(0));
  for(let i = 0; i < table[0].length; i++) {
      table[0][i] = i;
  }
  for(let i = 0; i < table.length; i++) {
      table[i][0] = i;
  }

  for(let i = 1; i < table.length; i++) {
      let row = i;
      for(let j = 1; j < table[0].length; j++) {
          let col = j;

          if(str1[row - 1] === str2[col - 1]) {
              table[row][col] = table[row - 1][col - 1];
          } else {
              table[row][col] = 1 + Math.min(table[row - 1][col - 1], table[row - 1][col], table[row][col - 1]);
          }
      }
  }

  return table[table.length - 1][table[0].length - 1];
}

console.log(levenshteinDistance('abc', 'yabd')) // 2