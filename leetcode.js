


// function sum(nums,target,i,j){  
//     for(i=0;i<nums.length;i++){
//         for(j=0;j<nums.length;j++){
//             if( i != j && nums[i]+nums[j]==target){
//                 return i,j;
//             }
//         }
//     }
// }
//     let nums=[3,2,4];
//     let target=6;
//     let i=0, j=0;
//     console.log(sum=(nums,target,i,j));


// var twoSum = function(nums, target) {
//     for(i=0;i<nums.length;i++){
//         for(j=0;j<nums.length;j++){
//             if(i != j && nums[i]+nums[j]==target){
//                 return [i,j];
                
//             }
//         }
//     }
// };console.log(twoSum([2,11,7,15],9));


/************************************************************** */

var removeDuplicates = function(nums) {
    for(i=0;i<nums.length;i++){
        if(nums[i+1]>nums[i]){
            nums=nums+nums[i];
        }
    }console.log(nums);
};

removeDuplicates([1,1,2,2,3,3,4,4,4]);