let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let arr = readLine().split(",");
let len = arr.length;
let d = {};
for (let i = 0; i < len; i = i + 2) {
  d[arr[i]] = arr[i + 1];
}
console.log(d);
