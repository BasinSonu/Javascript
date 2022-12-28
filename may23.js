/************************************************* Multiply the elements of an array and print the result ****************************/

function multiplication(arr){
let result=1;
for(i=0;i<arr.length;i++){
    result=result*arr[i];
    
}return result;
}

console.log(multiplication(arr=[1,2,3,4,5]));