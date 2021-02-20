let arr = [3,500,90,8,101,2,200,4,7,45,23,6,9,1,100,3,201];

let oddArr = [] ;
let evenArr = [] ;

for(let i=0 ; i<arr.length ; ++i) {

    if((arr[i]%2) == 0){
        evenArr.push(arr[i]);
    }
    
    else{
        oddArr.push(arr[i]);
    }
    
}
console.log(`Odd value's array is following :-`);
console.log(oddArr);
console.log(`Even value's array is following :-`);
console.log(evenArr);

