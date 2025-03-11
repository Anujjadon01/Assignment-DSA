//// intersection

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;
  
    let pA = headA, pB = headB;
  
    while (pA !== pB) {
      pA = pA ? pA.next : headB;  
      pB = pB ? pB.next : headA;  
    }
  
    return pA; 
  }
  
  function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    return head;
  }
  
  function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
  
  let common = new ListNode(8);
  common.next = new ListNode(10);
  
  let listA = createLinkedList([1, 2, 3]);
  let currentA = listA;
  while (currentA.next) {
    currentA = currentA.next;
  }
  currentA.next = common;
  
  let listB = createLinkedList([6, 7]);
  let currentB = listB;
  while (currentB.next) {
    currentB = currentB.next;
  }
  currentB.next = common;
  
  console.log("List A:");
  printLinkedList(listA);
  
  console.log("List B:");
  printLinkedList(listB);
  
  let intersection = getIntersectionNode(listA, listB);
  console.log("Intersection at node with value:", intersection ? intersection.val : "No intersection");