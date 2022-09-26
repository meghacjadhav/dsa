let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let N = parseInt(readLine());

let num = N;
let sum = 0;
let prod = 1;
while (num > 0) {
  rem = num % 10;
  sum += rem;
  prod *= rem;
  num = parseInt(num / 10);
}
// console.log(sum);
// console.log(prod);

let res = prod - sum;
if (res > 0) {
  console.log(res);
}
