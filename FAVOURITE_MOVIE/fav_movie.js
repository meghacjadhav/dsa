let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function ArrayOperation(operation, input, arr) {
  switch (operation) {
    case "add": {
      arr.push(input);
      console.log(arr);
      break;
    }
    case "remove": {
      arr.pop();
      console.log(arr);
      break;
    }
    default: {
      console.log("Invalid Input");
    }
  }
  operation = readLine();
  if (operation == "add") {
    input = readLine();
  }
  if (operation) ArrayOperation(operation, input, arr);
}
let operation = readLine();
let input;
if (operation == "add") {
  input = readLine();
}
let arr = [];
ArrayOperation(operation, input, arr);
