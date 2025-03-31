/**
 * Singly Linked List Implementation in JavaScript
 * 
 * A **Singly Linked List (SLL)** is a linear data structure where each node 
 * contains a value and a pointer to the next node in the sequence.
 * Unlike arrays, linked lists allow efficient insertions and deletions 
 * without needing to shift elements, but they require sequential access 
 * to traverse nodes.
 * 
 * **Advantages:**
 * - Dynamic size (no need to predefine capacity).
 * - Efficient insertions and deletions (O(1) at head/tail).
 * - Uses memory efficiently (no need for contiguous memory allocation).
 * 
 * **Disadvantages:**
 * - No direct access to elements (O(n) lookup time).
 * - Extra memory overhead due to pointers.
 * 
 * This implementation includes essential methods such as push, pop, shift, 
 * unshift, get, set, insert, size, and clear.
 */
class Node {
  constructor(value) {
    this.value = value; // Stores the value
    this.next = null; // Pointer to the next node (null for now)
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value); // Create first node
    this.tail = this.head; // Since there's only one node, tail = head
    this.length = 1; // The list starts with 1 node
  }

  /** Adds a node at the end of the list */
  push(value) {
    let newNode = new Node(value)

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode
    }

    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }

  /** Removes and returns the last node */
  pop() {
    if (!this.head) {
      return undefined
    }

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next
    }

    this.tail = prev
    this.tail.next = null
    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return temp.value;
  }

  /** Adds a node at the beginning of the list */
  unshift(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++
  }

  /** Removes and returns the first node */
  shift() {
    if (!this.head) return null; // Return null if the list is empty

    const firstNode = this.head
    this.head = this.head.next // Move head to the next node
    firstNode.next = null // Detach the removed node

    this.length--

    if (this.length === 0) {
      this.tail = null // Reset tail if the list is now empty
    }

    return firstNode.value // Return the removed node's value
  }

  /** Returns the first node */
  getFirst() {
    return this.head
  }

  /** Returns the last node */
  getLast() {
    if (!this.head) return null; // Return null if the list is empty

    let current = this.head;
    while (current.next) {
      current = current.next // Traverse to the last node
    }
    return current // Return the last node
  }

  /** Returns the node at the given index */
  get(index) {
    if (index < 0 || index >= this.length) return null; // Return null if out of bounds

    let current = this.head;
    let count = 0;

    while (count !== index) {
      current = current.next;
      count++;
    }

    return current; // Return the node at the given index
  }

  /** Updates the value of a node at a given index */
  set(index, value) {
    const node = this.get(index)
    if (node) {
      node.value = value;
    }

    return node;
  }

  /** Inserts a node at a given index */
  insert(index, value) {
    if (index < 0 || index > this.length) return;

    if (index === 0) {
      this.unshift(value)
      return
    }
    if (index === this.length) {
      this.push(value)
      return
    }

    const prevNode = this.get(index - 1)
    const newNode = new Node(value)

    newNode.next = prevNode.next
    prevNode.next = newNode

    this.length++
  }

  // size() {
  //   let size = 0
  //   let temp = this.head

  //   while (temp) {
  //     size++
  //     temp = temp.next
  //   }

  //   return size
  // }

  /** Returns the number of nodes in the list */
  size() {
    return this.length //more efficient
  }

  /** Removes all nodes from the list */
  clear() {
    this.head = null
    this.tail = null
    this.length = 0
  }
}

export default LinkedList

const list1 = new LinkedList(1)
list1.push(2)
list1.push(3)
list1.push(4)
list1.clear()
console.log(list1)

