var checkInclusion = function(s1, s2) {
let i = 0
let n = s1.length
let result
while (i < s2.length - n) {
    if(s1.includes(s2[i])){
        let sliceStr = s2.slice(i, i + n)
        const newStr =  sliceStr.split("").sort().join()
        const newS = s1.split("").sort().join()
        if (newStr === newS){
            result = true
            return result
        }else{
            result = false
            i ++
        }
    }else {
        i++
        result = false
    }
}
return result
}
let miao =  checkInclusion('ab', 'eidbaooo')
console.log(miao)