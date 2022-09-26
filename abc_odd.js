let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let ab = readLine().split(" ");
let A = parseInt(ab[0]);
let B = parseInt(ab[1]);
let C = 1;
let count = 0;
while (A >= 1 && B <= 3 && C < 4) {
  if ((A * B * C) % 2 != 0) {
    count++;
  }
  C++;
}
if (count > 0) {
  console.log("Yes");
} else {
  console.log("No");
}
