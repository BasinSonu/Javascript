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

/**************************************************** First letter of every word to uppercase ************************************************/
let arr=[],arr1=[],word,word1,word2=[];
function firstletterlettertouppercase(words){
        arr=words.split(" ");
        for(i=0;i<arr.length;i++){
            word=arr[i];
            arr1=word.split("");
            for(j=0;j<arr1.length;j++){
                if(j==0){
                    word1=arr1[j].toUpperCase();
                }else{
                    word1=word1+arr1[j];
                }
            }
            word2=word2+word1+" ";
        }
        console.log(word2);

}

firstletterlettertouppercase("basim is a good boy and he is very good looking");


/******************************************************* */