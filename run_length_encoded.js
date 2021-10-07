function runLengthEncoding(string) {
  // Write your code here.
	let currRun = string[0];
	let currLength = 1;
	let encoded = '';
	for(let i = 1; i < string.length; i++) {
		if(string[i] === currRun && currLength < 9) {
			currLength += 1;
		} else if(string[i] === currRun && currLength === 9) {
			encoded += currLength.toString() + currRun;
			currLength = 1;
		} else {
			encoded += currLength.toString() + currRun;
			currRun = string[i];
			currLength = 1;
		}
	}
	return encoded + currLength.toString() + currRun;
}
