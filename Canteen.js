let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let [n, k] = readLine().split(" ").map(Number);
let num = readLine().trim().split(" ").map(Number);
let bCharged = parseInt(readLine());

let sum = 0;
for (let i = 0; i < n; i++) {
  if (i == k) {
    continue;
  }
  sum += num[i];
}

sum = sum / 2;
if (sum == bCharged) {
  console.log("It is Correct!");
} else {
  console.log(bCharged - sum);
}
