let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let a = parseInt(readLine());
let b = parseInt(readLine());

let sum = a + b;
let prod = a * b;
let diff = a - b;

console.log(sum);
console.log(diff);
console.log(prod);
