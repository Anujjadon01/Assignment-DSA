// class node{
// constructor(data){                          // Q-1
//     this.data=data
//     this.next=null
// }
// }

// let a=new node(10)
// let b=new node(20)
// let c=new node(30)
// let d=new node(40)
// let e=new node(50)

// a.next=b
// b.next=c
// c.next=d
// d.next=e

// let head=a
// let current=head
// let count=0;

// while (current!==null) {
//     count++;
//     current=current.next
// }


// let res=Math.floor(count/2)

// current=head

// let i=0;
// while(i<res){
//     current=current.next
//     i++
// }

// // for (let i = 0; i < res; i++) {
// //     current=current.next
// // }

// console.log(current.data);




// class node{
//     constructor(value){                                        // Q-2
//         this.value=value
//         this.next=null
//     }
// }

// let first=new node(1)
// let second=new node(2)
// let third=new node(3)
// let four=new node(4)
// let five=new node(5)


// first.next=second
// second.next=third
// third.next=four
// four.next=five

// let headd=first
// let curent=headd
// let arr=[]

// while (curent!==null) {
//     arr.push(curent.value)
//     curent=curent.next
// }

// for (let i = arr.length-1; i>=0; i--) {
// console.log(arr[i]);
// }


////date................4 march

////Q=2

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// function removeNthFromEnd(head, n) {
//     let dummy = new Node(0);
//     dummy.next = head;
//     let first = dummy;
//     let second = dummy;

   
//     for (let i = 0; i <= n; i++) {
//         if (first !== null) first = first.next;
//     }

    
//     while (first !== null) {
//         first = first.next;
//         second = second.next;
//     }

 
//     second.next = second.next.next;

//     return dummy.next;
// }


// function printList(head) {
//     let current = head;
//     while (current !== null) {
//         console.log(current.data);
//         current = current.next;
//     }
// }


// let head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);

// let n = 2; 

// head = removeNthFromEnd(head, n);

// printList(head);




////Q=1

// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// function mergeTwoLists(l1, l2) {
//     if (!l1) return l2;
//     if (!l2) return l1;
    
//     if (l1.val < l2.val) {
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1;
//     } else {
//         l2.next = mergeTwoLists(l1, l2.next);
//         return l2;
//     }
// }

// function printList(head) {
//     let result = [];
//     while (head) {
//         result.push(head.val);
//         head = head.next;
//     }
//     console.log(result.join(" -> "));
// }

// let l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
// let l2 = new ListNode(2, new ListNode(4, new ListNode(6)));
// let mergedHead = mergeTwoLists(l1, l2);
// printList(mergedHead);
