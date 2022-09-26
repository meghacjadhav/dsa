let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
let num = n;
let sum = 0;
while (n > 0) {
  let rem = n % 10;
  sum = sum + rem * rem * rem;
  n = parseInt(n / 10);
}
if (sum == num) {
  console.log("Yes");
} else {
  console.log("No");
}
