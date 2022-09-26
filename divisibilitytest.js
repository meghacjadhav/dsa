let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let f = readLine().split(" ");
let n = parseInt(f[0]);
let x = parseInt(f[1]);

let count = 0;
let s = readLine().split(" ");
for (let i = 0; i < n; i++) {
  let num = parseInt(s[i]);
  if (num % x == 0) {
    count++;
  }
}
console.log(count);
