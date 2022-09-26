let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let train = readLine().split(" ");
let N = parseInt(train[0]);
let i = parseInt(train[1]);
let j = 0;
if (i <= N) {
  j = N - i + 1;
}
console.log(j);
