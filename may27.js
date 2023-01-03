/************************************************ Print uppercase letters **************************************************/

// function printUpperCase(letter){
//     let upper=letter.toUpperCase();
//     return upper;
// }

// let a=(printUpperCase("basim"));
// console.log(a);


/**************************************************Reverse of a Number *************************************************/

// function reverseofnumber(number){
//     number=number+"";
//     let a = number.split("");
//     console.log(a);
//     for(i=0;i<a.length;i++){
//         for(j=0;j<a.length;j++){
//             if(a[i]<a[j]){
//                 temp=a[i];
//                 a[i]=a[j];
//                 a[j]=temp;
//             }
//         }
//     }
//     let final = a.join("");
//     return final;
// }

// console.log(reverseofnumber(32568));

/******************************************************************************/

function firstletterlettertouppercase(words){
    console.log(words);
    words=words+"";
    console.log(words);
    let arr=words.split(" ");
    console.log(arr);
    console.log(arr.length);
    for(i=0;i<arr.length;i++){
        let word=arr[i];
        console.log(word);
        let arr1=word.split("");
        console.log(arr1);
        for(j=0;j<1;j++){
            arr1=arr1[j].toUpperCase();
            
        }console.log(arr1);

    }

}

firstletterlettertouppercase("the quick brown fox");