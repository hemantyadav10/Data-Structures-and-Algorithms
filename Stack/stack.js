/**
 * Stack Implementation in JavaScript
 *
 * A **Stack** is a linear data structure that follows the **LIFO (Last In, First Out)** principle.
 * The last element added to the stack is the first one to be removed.
 * 
 * **Advantages:**
 * - Simple and efficient for operations like undo/redo, backtracking, and expression evaluation.
 * - Uses minimal memory overhead.
 * 
 * **Disadvantages:**
 * - No direct access to elements except the top.
 * - Limited in functionality compared to other data structures like linked lists or arrays.
 * 
 * This implementation includes essential methods such as push and pop.
 */

/**
 * Represents a node in the stack.
 * Each node contains a value and a pointer to the next node.
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Stack class using a linked list structure.
 */
class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  /**  Pushes a new value onto the top of the stack. */
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++

    return this;

  }

  /** Removes and returns the top node from the stack.*/
  pop() {
    const removedNode = this.top;

    if (this.length === 0) return null;

    this.top = this.top.next;
    removedNode.next = null;

    this.length--;

    return removedNode;
  }
}

const myStack = new Stack(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.pop()
myStack.pop()
console.log(myStack)