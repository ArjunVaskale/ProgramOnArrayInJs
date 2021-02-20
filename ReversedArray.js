// npm install readline-sync
var readline = require('readline-sync')
var myArray = [];
var n = readline.question('enter size of array => ')

console.log('enter the value of array')

for (let i = 0; i < n; i++) {
    x = readline.question();
    myArray[i] =  x ;
}

console.log('your reversed array is')
for(let i = myArray.length-1 ; i >= 0 ; --i ){
    console.log(myArray[i])
}
