/*************************************************Reverse a String ******************************************/






let a="basim";
let left=0;
let right=a.length-1;

let arr=[];
let m=0;
for(i=right;i>=0;i--){
        arr[m]=a[i];
        m++;
    }console.log(arr);




// while(left<right){
//     temp=a[left];
//     a[left]=a[right];
//     a[right]=temp;
//     left++;
//     right--;
    
// }console.log(a);




let str="jesil";
let newString = "";
for (let i = str.length - 1; i >= 0; i--) {
        newString = newString+str[i];
    }
    console.log(newString);