var twoSum = function(numbers, target) {
    let low = 0; let high = numbers.length;
    while(high > low){
        if(numbers[low] + numbers[high] === target) {
            return [low, high]
        }else if(numbers[low] + numbers[high] > target){
            high --
        }else {
            low ++
        }
    }
    return [low, high]
};