var moveZeroes = function(nums) {
    let i =0
    let n = nums.length
    while(i< n){
        if(nums[i] === 0){
            nums.push(0)
            nums.splice(i,1)
            n--
        }else{
            i ++
        }
    }
    return nums
};

const miao = moveZeroes([0,1,0,3,12])

console.log(miao)