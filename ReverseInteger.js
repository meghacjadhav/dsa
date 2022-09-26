let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let num = parseInt(readLine());
let rev = 0;
if (num > 0) {
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = parseInt(num / 10);
  }
} else if (num < 0) {
  rev = 0;
  num = Math.abs(num);
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = parseInt(num / 10);
  }
  rev = -rev;
}
console.log(parseInt(rev));
