let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
let max = 0;
for (let i = 1; i <= n; i = i + 2) {
  let num = parseInt(readLine());

  for (let j = 2; j <= n; j = j + 2) {
    let n = parseInt(readLine());
    let sum = num + n;
    if (sum > max) {
      max = sum;
    }
  }
}
if (max > 100) {
  console.log("True");
} else {
  console.log("False");
}
