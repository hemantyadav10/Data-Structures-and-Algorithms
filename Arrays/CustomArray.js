// Custom implementation of an array-like data structure.

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {} // Object to store array elements
  }

  /** Adds an item to the end of the array and returns the new length */
  push(item) {
    this.data[this.length] = item;
    this.length++
    return this.length
  }

  /** Retrieves an item by index */
  get(index) {
    return this.data[index]
  }

  /** Removes the last item from the array and returns it */
  pop() {
    const poppedItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return poppedItem
  }

  /** Removes the first item, shifts others, and returns it */
  shift() {
    const firstItem = this.data[0]
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
    return firstItem
  }

  /** Deletes an item at a specific index, shifts elements, and returns it */
  deleteByIndex(index) {
    const itemToDelete = this.data[index]
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
    return itemToDelete
  }

}

const myNewArray = new MyArray()
myNewArray.push(5)
myNewArray.push(6)
myNewArray.push("apple")

console.log(myNewArray)
console.log(myNewArray.deleteByIndex(1))
console.log(myNewArray)

export default MyArray;

[1, 2, 3].push()