var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i ++) {
        let secNum = target - nums[i]
        if (nums.includes(secNum) && nums.indexOf(secNum) !== i) {
            return [i, nums.indexOf(secNum)]
        }
    }
};