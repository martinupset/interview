var middleNode = function(head) {
    let slow = fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow  
};

// ◎Math.ceil()执行向上舍入，即它总是将数值向上舍入为最接近的整数；
// ◎Math.floor()执行向下舍入，即它总是将数值向下舍入为最接近的整数；
// ◎Math.round()执行标准舍入，即它总是将数值四舍五入为最接近的整数(这也是我们在数学课上学到的舍入规则)。