let fs = require("fs");
const { read } = require("node:fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let arr = readLine().split(" ");
let sum = 0;
for (let i = 0; i < n; i = i + 2) {
  sum += parseInt(arr[i]);
}
console.log(sum);
