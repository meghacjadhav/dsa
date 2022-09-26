let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let [n, x] = readLine().split(" ").map(Number);
let arr = readLine().split(" ").map(Number);
let j = n - 1;
while (arr[j] > x && j >= 0) {
  arr[j + 1] = arr[j];
  j--;
}
arr[j + 1] = x;
console.log(...arr);
