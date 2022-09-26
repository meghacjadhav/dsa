let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n1 = parseInt(readLine());
let n2 = parseInt(readLine());
let n3 = parseInt(readLine());

let d = n3 - n2;

let n = n1 + (4 - 1) * d;
console.log(n);
