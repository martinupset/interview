var reverseWords = function(s) {
    const stringArr = s.split(" ")
    let res = []
    for (element of stringArr){
            high = element.length - 1
            while (high >= 0) {
                res.push(element[high])                   
                high --
            }
            res.push(" ")
    }
    return res.join('').trim()
};

const miao = reverseWords("Let's take LeetCode contest")
console.log(miao)