function getNthFib(n) {
  // Write your code here.
	let fibs = [0, 1];
	for(let i = 1; i < (n - 1); i++) {
		fibs.push(fibs[i] + fibs[i - 1]);
	}
	return fibs[n - 1];
}
// 0 1 1 2 3 5 8 13 21

