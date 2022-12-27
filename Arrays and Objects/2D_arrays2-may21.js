/************************************** Diagonal matrix *************************************/
/*
1   0   0
0   1   0
0   0   1

*/

// function diagonalmatrix(arr){
// let count=0;
// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr.length;j++){
//         if(i != j && arr[i][j] != 0){
//         count=count+1;
//         }
//     }
// }

// if(count != 0){
//     console.log("Not a diagonal matrix");
// }else{
//     console.log("Its a diagonal matrix");
// }
// }

// diagonalmatrix(arr=[[5,0,0],[0,1,0],[0,0,1]]);


/********************************************* Row wise Sum ******************************************/

// arr=[[5,8,9],[4,2,9],[10,13,15]];
// let totalrow=3,totalcol=3,rowsum;

// let row=0;
// while(row<totalrow){
//     let sum=0;
//     for(i=0;i<totalcol;i++){
//         sum+=arr[row][i];
//     }
//     console.log(sum);
//     row++;
// }


/*********************************************************Sum of upper and lower diagonal elements ************************************************/


// arr=[[5,8,9],[4,2,9],[10,13,15]];
function sumofupperandlowerdiagonalelements(arr){
let totalrow=3, totalcol=3, upper=0, lower=0;
for(i=0;i<totalrow;i++){
    for(j=0;j<totalcol;j++){
        if(i>=j){
            lower+=arr[i][j];
        }
        if(i<=j){
            upper+=arr[i][j];
        }
    }
}
console.log("sum of upper diagonal elements is "+upper);
console.log("sum of lower diagonal elements is "+lower);
}
sumofupperandlowerdiagonalelements(arr=[[5,8,9],[4,2,9],[10,13,15]]);