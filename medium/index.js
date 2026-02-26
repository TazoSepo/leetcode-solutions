function isExpression(item) {
  const expressions = ["+", "-", "/", "*"];
  if (expressions.includes(item)) {
    return item;
  }
  return false;
}

function applyOperation(a, b, operation) {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      let answer = a / b;
      return answer > 0 ? Math.floor(a / b) : Math.ceil(a / b);
    case "*":
      return a * b;
  }
}

var evalRPN = function (tokens) {
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    let operation = isExpression(tokens[i]);
    if (!operation) {
      stack.push(Number(tokens[i]));
    } else {
      let b = stack.pop();
      let a = stack.pop();
      stack.push(applyOperation(a, b, operation));
    }
  }

  return stack.pop();
};
