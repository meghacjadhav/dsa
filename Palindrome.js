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
let rev = 0;

while (num > 0) {
  let rem = num % 10;
  rev = rev * 10 + rem;
  num = parseInt(num / 10);
}

if (rev == n) {
  console.log("True");
} else {
  console.log("False");
}
