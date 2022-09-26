let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let c = 2;
let sum = 1;
for (let i = 1; i < n; i++) {
  sum += c;
  c++;
}
console.log(sum);
