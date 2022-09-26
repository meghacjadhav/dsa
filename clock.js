let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let num = readLine().split(" ");
let num1 = parseInt(num[0]);
let num2 = parseInt(num[1]);

let sum = num1 + num2;
if (sum <= 12) {
  console.log(sum);
} else if (sum > 12) {
  while (sum > 12) {
    sum = sum - 12;
  }
  console.log(sum);
}
