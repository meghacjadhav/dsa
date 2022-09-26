let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let arr = [];
let S = 0;
for (let i = 0; i < n; i++) {
  let num = parseInt(readLine());
  arr.push(num);
}
let mini = Math.min(...arr);
while (mini > 0) {
  let rem = mini % 10;
  S += rem;
  mini = parseInt(mini / 10);
}
if (S % 2 != 0) {
  console.log(0);
} else {
  console.log(1);
}
