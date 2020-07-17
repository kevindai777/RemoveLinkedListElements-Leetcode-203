//Objective is to remove any elements in a linked list of a given value

class Node {
    constructor(val, next = null) { //if next is not given, assume it is empty
      this.val = val
      this.next = next
    }
}

class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(6)
head.next.next.next = new Node(3)
head.next.next.next.next = new Node(4)
head.next.next.next.next.next = new Node(5)
head.next.next.next.next.next.next = new Node(6)

let val = 6


//O(n) solution that skips over any duplicate elements using a sentinal node

let newNode = new Node(-1)
newNode.next = head 
let temp = newNode 

let curr = head 
while (curr) {
    //If the element is found, skip over it
    if (curr.val == val) {
        temp.next = curr.next 
    //Otherwise, try the next value in the head
    } else {
        temp = curr
    }
    
    curr = curr.next
}

return newNode.next