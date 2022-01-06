var reverseList = function(head) {
    const front = head
    const back = head.next
    while (back) {
        back = back.next
        back.next = front
        front = front.next
    }
};