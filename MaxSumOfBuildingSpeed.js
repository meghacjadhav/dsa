let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let N = parseInt(readLine());
let arr = readLine().split(" ").map(Number);
arr.sort((a, b) => a - b);
let sum = 0;
for (let i = 0; i < arr.length; i = i + N) {
  sum = sum + arr[i];
}
console.log(sum);
