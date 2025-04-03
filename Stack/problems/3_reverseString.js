function reverseString(str) {
  const stack = [];
  let revString = "";

  for (let char of str) {
    stack.push(char)
  }

  while (stack.length > 0) {
    revString += stack.pop();
  }

  return revString;
}

const reversedString = reverseString('hello world');
console.log(reversedString); // dlrow olleh