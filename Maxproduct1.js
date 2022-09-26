let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let alen = parseInt(readLine());
let blen = parseInt(readLine());
let a = [];
let b = [];
let num = readLine().split(" ");
let num1 = readLine().split(" ");
for (let i = 0; i < alen; i++) {
  a.push(parseInt(num[i]));
}
for (let j = 0; j < blen; j++) {
  b.push(parseInt(num1[j]));
}
let a1 = a.map((val) => Math.abs(val));
let b1 = b.map((val) => Math.abs(val));

let amax = Math.max(...a1);
let bmax = Math.max(...b1);
console.log(amax * bmax);
