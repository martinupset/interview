var rotate = function(nums, k) {
    let result = []
    let end = nums.length - 1
    result.length = nums.length
    result.fill(0, 0, nums.length)
    for (let i = 0; i < nums.length; i ++){
        if (i + k > end){
            result[(i + k) % nums.length] = nums[i]
        }else {
            result[i + k] = nums[i]
        }
    }
    return result
};

// console.log(rotate([1,2,3,4,5,6,7], 3))

// var rotate = function(nums, k) {
//     const n = nums.length;
//     const newArr = new Array(n);
//     for (let i = 0; i < n; ++i) {
//         newArr[(i + k) % n] = nums[i];
//     }
//     for (let i = 0; i < n; ++i) {
//         nums[i] = newArr[i];
//     }
//     return newArr
// };

console.log(rotate([1,2,3,4,5,6,7], 3))