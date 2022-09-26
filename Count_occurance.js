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
let query_int = parseInt(readLine());
let count = 0;
for (let i = 0; i < n; i++) {
  if (a[i] == query_int) {
    count++;
  }
}
console.log(count);
