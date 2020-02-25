function isParenthesisValid(string) {
  const stack = new Stack()

  for (let i = 0; i < string.length; i++) {
    let curPar = string.charAt(i) 
    curPar === "(" 
      ? stack.push(curPar)
      : stack.delete()
  }
  return stack.isEmpty()
}

console.log(isParenthesisValid("((()"))
console.log(isParenthesisValid("()()"))
