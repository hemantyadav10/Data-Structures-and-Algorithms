/**
 * Doubly Linked List Implementation in JavaScript
 * 
 * A **Doubly Linked List (DLL)** is a linear data structure where each node 
 * contains a value and pointers to both the next and previous nodes in the sequence.
 * This allows for more efficient traversal in both directions compared to a Singly Linked List.
 * 
 * **Advantages:**
 * - Dynamic size (no need to predefine capacity).
 * - Efficient insertions and deletions at both the head and tail (O(1) time complexity).
 * - Can be traversed in both directions (forward and backward).
 * 
 * **Disadvantages:**
 * - Extra memory overhead due to two pointers (next and prev) in each node.
 * - Requires additional operations to maintain both pointers when inserting or deleting nodes.
 * 
 * This implementation includes essential methods such as push, pop, shift, 
 * unshift, and other common linked list operations.
 */
class Node {
  constructor(value) {
    this.value = value; // The value stored in the node
    this.next = null; // Pointer to the next node
    this.prev = null; // Pointer to the previous node
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode; // Create first node
    this.tail = newNode; // Since there's only one node, tail = head
    this.length = 1; // The list starts with 1 node
  }

   /** Adds a node at the end of the list */
  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode; 
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  /** Removes and returns the last node */
  pop() {
    if (!this.head) return undefined;

    const temp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    this.length--;

    return temp;
  }

   /** Adds a node at the beginning of the list */
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

   /** Removes and returns the first node */
  shift() {
    if (this.length === 0) return undefined;

    const removedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length--;

    removedNode.next = null;
    
    return removedNode;
  }

}

const linkedList1 = new DoublyLinkedList(5);
linkedList1.push(10);
linkedList1.push(15);

console.log(linkedList1.shift());
console.log(linkedList1);