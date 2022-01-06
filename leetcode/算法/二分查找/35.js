// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 请必须使用时间复杂度为 O(log n) 的算法

var searchInsert = function(nums, target) {
    let min = 0; max = nums.length - 1
    let result = nums.length
    while(max >= min){
        mid = Math.floor((max - min) / 2) + min
        if(nums[mid] >= target){
            result = mid
            max = mid - 1
        }else {
            min = mid +1
        }
    }
    return result
};