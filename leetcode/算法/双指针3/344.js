var reverseString = function(s) {
    let low = 0, high = s.length - 1
    let temp
    while (low < high) {
        temp = s[low]
        s[low] = s[high]
        s[high] = temp
        low ++
        high --
    }
    return s
};