// var containsDuplicate = function(nums) {
//     for (let i = 0; i < nums.length; i ++) {
//         for (let p = i + 1; p < nums.length; p ++) {
//             if(nums[p] === nums[i]){
//                 return true
//             }else{

//             }
//         }
//     }
//     return false
// };

var containsDuplicate = function(nums) {
    let set = new Set(nums);
    if (set.size === nums.length) {
        return false
    }else {
        return true
    }
}

containsDuplicate([1,2,3,4])