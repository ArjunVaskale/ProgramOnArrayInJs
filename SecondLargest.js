let arr = [3,90,8,101,2,200,505,4,7,45,23,6,9,1,100,3  ];

let max1  = arr[0];
let max2 = arr[0] ;

for(let i=0 ; i<arr.length ; ++i) {
    
    if(arr[i]>max1){
        max1 = arr[i];
    }
    
    
}


for(let i=0 ; i<arr.length ; ++i) {
    
    if(arr[i]>max2 && arr[i]<max1){
        max2 = arr[i];
    }
    
}

console.log(`second largest element is => ${max2}`);
