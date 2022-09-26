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
  a[i] = parseInt(readLine());
}
let val = a[0];
let count = 1;
for (let i = 1; i < n; i++) {
  if (a[i] == val) {
    count++;
  }
}
console.log(count);
