// var removeNthFromEnd = function(head, n) {
//     let p = head
//     let arr = []
//     while (p && p.next) {
//         arr.push(p.val)
//     }
//     arr.splice(arr.length - n, 1)
//     let newP = new ListNode()
//     let result = newP
//     for(element of arr){
//         newP.val = element
//         newP = newP.next
//     }
//     return result
// };

// var removeNthFromEnd = function(head, n) {
//     let fast = slow = head
//     let result = slow
//     for (i = 0; i < n; i ++) {
//         fast = fast.next
//     }
//     if(!fast){
//         return head.next
//     }
//     while (fast.next) {
//         fast = fast.next
//         slow = slow.next
//     }
//     slow.next = slow.next.next
//     return result
// };