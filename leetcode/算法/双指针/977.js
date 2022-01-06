var sortedSquares = function(nums) {
    const result = nums.map(element => element*element)
    result.sort((a,b) => a-b)
    return result
};

//双指针
var sortedSquares = function(nums) {
    let res = []
    let i = 0, j = nums.length - 1
    while(i <= j) {
        if(Math.abs(nums[i]) > Math.abs(nums[j])){
            res.unshift(Math.abs(nums[i]) * Math.abs(nums[i]))
            i ++
        }else{
            res.unshift(Math.abs(nums[j]) * Math.abs(nums[j]))
            j -- 
        }
    }
    return res
};