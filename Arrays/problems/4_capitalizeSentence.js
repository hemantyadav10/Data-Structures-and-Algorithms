/** Capitalizes the first letter of each word in a sentence */
function capitalizeSentence(sentence) {
  return sentence
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

console.log(capitalizeSentence("HELLO WORLD"))