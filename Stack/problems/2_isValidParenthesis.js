/**
 * Question: Valid Parentheses Checker
 *
 * Given a string containing only the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid. A string is considered valid if:
 * 
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 *
 * Example Test Cases:
 * isValidParenthesis("(){}[]")  → true  (All brackets are correctly matched)
 * isValidParenthesis("([)]")    → false (Incorrect order)
 * isValidParenthesis("()")      → true  (Correctly matched)
 * isValidParenthesis("(")       → false (Unmatched opening bracket)
 */
function isValidParenthesis(str) {
  const stack = [];
  const pairs = {
    "{": "}",
    "[": "]",
    "(": ")",
  }

  for (const char of str) {
    if (char === "{" || char === "(" || char === "[") {
      stack.push(char);
    } else {
      const item = stack.pop(char);
      if (char !== pairs[item]) return false;
    }
  }

  return stack.length === 0;
}

console.log(isValidParenthesis("(){}[]")); // true 
console.log(isValidParenthesis("([)]")); // false
console.log(isValidParenthesis("()")); // true 
console.log(isValidParenthesis("(")); // false

