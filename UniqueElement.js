
var arr = ['a' , 'b' , 'c' , 'd' , 'e','a','f'];

for(let i = 0 ; i< arr.length-1 ; ++i){
    let check = true  ;
    for (let j = i+1 ; j < arr.length ; ++j){
        if(arr[i] == arr[j]){
            check = false ;

        }
       
    }
    if(check){
        console.log(arr[i]);
    }
}