let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Fill in the following function.
// Please do not change the function name.
function signum(number) {
  if (number > 0) {
    return 1;
  } else {
    return -1;
  }
}

// Please do not edit the code below this line.

let testInput = parseFloat(readLine());
console.log(signum(testInput));
