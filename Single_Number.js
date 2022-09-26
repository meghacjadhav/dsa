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
let res = 0;
for (let i = 0; i < n; i++) {
  let num = parseInt(readLine());
  a.push(num);
}
for (let j = 0; j < n; j = j + 2) {
  if (a[j] == a[j + 1]) {
    res = 0;
  } else {
    res = a[j];
  }
}
console.log(res);
