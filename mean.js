let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let marks = readLine().split(" ");
let sum = 0;
for (let i = 0; i < n; i++) {
  let num = parseInt(marks[i]);
  sum += num;
}
let mean = Math.floor(sum / n);
console.log(mean);
