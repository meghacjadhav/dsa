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
for (let i = 0; i < n; i++) {
  let num = parseInt(readLine());
  a.push(num);
}
// console.log(a);
let m = parseInt(readLine());
let b = [];
for (let j = 0; j < m; j++) {
  let num1 = parseInt(readLine());
  b.push(num1);
}
// console.log(b);
let count = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (a[i] == b[j]) {
      count++;
    } else {
      break;
    }
  }
}
console.log(count);
