/************************************** Diagonal matrix *************************************/
/*
1   0   0
0   1   0
0   0   1

*/

function diagonalmatrix(arr){
let count=0;
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(i != j && arr[i][j] != 0){
        count=count+1;
        }
    }
}

if(count != 0){
    console.log("Not a diagonal matrix");
}else{
    console.log("Its a diagonal matrix");
}
}

diagonalmatrix(arr=[[5,0,0],[0,1,0],[0,0,1]]);