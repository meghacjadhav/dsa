let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let a = [];
let plus = 0;
let minus = 0;

for (let i = 0; i < n; i++) {
  let n = parseInt(readLine());
  a.push(n);
}
for (let j = 0; j < n; j = j + 2) {
  plus = plus + a[j];
}
for (let k = 1; k < n; k = k + 2) {
  minus = minus + a[k];
}
let res = plus - minus;
console.log(res);
