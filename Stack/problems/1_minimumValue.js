class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
    } else {
      newNode.next = this.first
      this.first = newNode
    }

    this.length++;

    return this;
  }

  min() {
    if (!this.first) return null;
  
    let current = this.first;
    let minValue = current.value;
  
    while (current) {
      if (minValue > current.value) {
        minValue = current.value;
      }
      current = current.next;
    }
  
    return minValue;
  }
}

const myLinkedList = new Stack(5)
myLinkedList.push(10)
myLinkedList.push(2)
myLinkedList.push(-1)

console.log(myLinkedList.min())