var search = function(nums, target) {
    let high = nums.length -1, low = 0
    while(low < high){
        let mid = Math.floor((high - low) / 2) + low
        const num = nums[mid];
        if(num === target){
            return mid
        }else if(num > target){
            high = mid - 1
        }else {
            low = mid + 1
        }
    }
    return -1
};

console.log(Math.floor(0.7))

console.log(search([1,2,3,4],4))

// var search = function(nums, target) {
//     let low = 0, high = nums.length - 1;
//     while (low <= high) {
//         const mid = Math.floor((high - low) / 2) + low;
//         const num = nums[mid];
//         if (num === target) {
//             return mid;
//         } else if (num > target) {
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }
//     return -1;
// };