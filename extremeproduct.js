let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let min = 999;
let max = -999;
let res;
for (let i = 0; i < n; i++) {
  let num = parseInt(readLine());
  if (num < min) {
    min = num;
  }
  if (num > max) {
    max = num;
  }
}
console.log(min * max);
