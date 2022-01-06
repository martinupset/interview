var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let low = 1, high = n
        while(high > low){
            let mid = Math.floor((high - low) /2) + low
            if (isBadVersion(mid)){
                high = mid
            }else{
                low = mid + 1
            }
        }
        return high
    };
};