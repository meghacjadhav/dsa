let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let num = readLine().split(" ");
let N = parseInt(num[0]);
let k = parseInt(num[1]);
let arr = readLine().split(" ");
let count = 0;
for (let i = 0; i < N; i++) {
  if (arr[i] == k) {
    count++;
  }
}
console.log(count);
