const makeChange = (c) => {
  // your name here
	let cents = parseInt(c);
	const change = { q: 0, d: 0, n: 0, p: 0};

	change.q = Math.floor(cents/25);
	cents %= 25;
	change.d = Math.floor(cents/10);
	cents %= 10;
	change.n = Math.floor(cents/5);
	cents %= 5;
	change.p = cents;
	
	return change;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
