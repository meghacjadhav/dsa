let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function distanceCovering(num) {
  let i = 0,
    sum = 0;
  console.log(Calculate(num, sum));
}
function Calculate(num, sum) {
  if (sum == num) {
    return 1;
  } else if (sum > num) {
    return 0;
  }
  return Calculate(num, sum + 1) + Calculate(num, sum + 2);
}
let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  let num = parseInt(readLine());
  let count = 0;
  distanceCovering(num, count);
}
