
var readline = require('readline-sync');


let arr = [10,11,12,13,14,15,16,17,18,19];
console.log(`Array is =>`)
console.log(arr)

var x = readline.question('Enter position of array element =>')

arr.splice(x , 1);
console.log('After Deleting Element');
console.log(arr);
