let arr = [3,500,90,8,101,2,200,4,7,45,23,6,9,1,100,3,201   ];

let min  = arr[0];
let max = arr[0] ;

for(let i=0 ; i<arr.length ; ++i) {

    if(arr[i]<min){
        min = arr[i] ;
    }
    
    if(arr[i]>max){
        max = arr[i];
    }
    
}
console.log(`minimum value is => ${min}`);
console.log(`maximun value is => ${max}`);
