	var readline = require('readline-sync');

	let arr = [1,2,3,4,5,6];
	console.log( `Previous Array Is => ${arr}` )

	var x = readline.question("enter new value => ");

	 arr.push(x);
	 console.log( `New Array Is => ${arr}` )

