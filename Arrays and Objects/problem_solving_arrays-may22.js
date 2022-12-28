
/******************************************** Sorting **************************************/

// let arr=[5,9,12,3,2,1,10];                              /***** 1st method***** */
// let count=0;
// while(count<arr.length){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>arr[i+1]){
//         temp=arr[i];
//         arr[i]=arr[i+1];
//         arr[i+1]=temp;
//         }
//     }
//     count++
// }console.log(arr);

/*******************************************************************************************************************************/
/******** 2nd method *************/

let arr=[5,9,12,3,2,1,10];
console.log(arr);
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(arr[j]>arr[j+1]){
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}console.log(arr);
