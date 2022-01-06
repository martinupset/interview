var lengthOfLongestSubstring = function(s) {
    let left = 0, right = 1
    let result = 0
    while (right <= s.length) {
        console.log(right)
        if(s.slice(left, right).includes(s[right])){
            left ++
        }else{
            right ++
            console.log(right)
        }
        result = Math.max(result, right - left)
    }
    return result
};

const miao = lengthOfLongestSubstring("bb")
console.log(miao)


//s.split
//s.slice
//s.includes
//s.charAt


//arr.splice