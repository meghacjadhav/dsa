let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
function factorial(number) {
  let fact = 1;
  if (number > 0) {
    for (let i = 1; i <= number; i++) {
      fact *= i;
    }
    return fact;
  } else if (number == 0) {
    return 1;
  } else if (number < 0) {
    return undefined;
  }
}

let number = parseInt(readLine());

console.log(factorial(number));
