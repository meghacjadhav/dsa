let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let max = -999;
for (let i = 0; i < n; i++) {
  let num = parseInt(readLine());
  if (num > max) {
    max = num;
  }
  console.log(max);
}
