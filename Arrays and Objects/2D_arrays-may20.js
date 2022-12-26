// let age1=[10,20,15,23,28,30];
// let age2=[23,50,15,30,11,20];
// totalage=[age1,age2];
// console.log(totalage);

// let arr=[[1,2,3,4],[5,6,7,8]];
// for(let row=0;row<arr.length;row++){
//     for(let col=0;col<arr[0].length;col++){
//         console.log(arr[row][col]);
//     }
// }
// console.log(arr[0][3]);
// console.log(arr[0].length);

/************************************************************************************************/

/*
                 1   2   3   4       1  2  3  4  5       1  2  3   4   5   6   7
                 5   6   7   8       6  7  8  9  10      8  9  10  11  12  13  14
                 9   10  11  12      11 12 13 14 15      15 16 17  18  19  20  21
                 13  14  15  16      16 17 18 19 20      22 23 24  25  26  27  28
*/                        /*         21 22 23 24 25        */

// let arr=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
// let arr=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]];
// let arr=[[1,2,3,4,5,6,7],[8,9,10,11,12,13,14],[15,16,17,18,19,20,21],[22,23,24,25,26,27,28]];
// let arr=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
// var row1=arr[0], row2=arr[1], row3=arr[2], row4=arr[3],row=4,col=7;
// for(var i=0;i<1;i++){
//     for(j=0;j<col;j++){
//         console.log(arr[i][j]);
// }
// }
// for(var i=1;i<row;i++){
//     for(j=col-1;j<col;j++){
//         console.log(arr[i][j]);
//     }
// }
// for(i=row-1;i<row;i++){
//     for(j=row4.length-2;j>=0;j--){
//         console.log(arr[i][j]);
//     }
// }
// for(i=row-2;i>0;i--){
//     for(j=0;j<1;j++){
//         console.log(arr[i][j]);
//     }
// }
// for(i=1;i<row2.length-2;i++){
//     for(j=1;j<row2.length-1;j++){
//         console.log(arr[i][j]);
//     }
// }
// for(i=2;i>1;i--){
//     for(j=row3.length-2;j>0;j--){
//         console.log(arr[i][j]);
//     }
// }


/*******************************************************************************************************************/



/*
                 1   2   3   4       1  2  3  4  5       1  2  3   4   5   6   7
                 5   6   7   8       6  7  8  9  10      8  9  10  11  12  13  14
                 9   10  11  12      11 12 13 14 15      15 16 17  18  19  20  21
                 13  14  15  16      16 17 18 19 20      22 23 24  25  26  27  28
                                     21 22 23 24 25        

*/


// let arr=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
// let count1=1,count2=1
// let row=arr.length,col=arr[0].length;
// for(i=0;i<count1;i++){
//     for(j=0;j<col;j++){
//     console.log(arr[i][j]);
//     if(j=col-1){
        
//     }
// }
// }
// console.log(arr[0].length);


/*********************************************************************************************************/

/*                                 1  2  3  4  5
                                   6  7  8  9  10
                                   11 12 13 14 15
                                   16 17 18 19 20
                                   21 22 23 24 25 
                            
*/

let startingrow=0, startingcol=0, totalrow=5, totalcol=5;
let arr=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
// while(startingrow<totalrow && startingcol<totalcol){


if(startingcol<totalcol){
    for(i=0;i<totalrow;i++){
        console.log(arr[i][startingcol]);
        startingrow++;
    }startingcol++;
}console.log(startingcol);


