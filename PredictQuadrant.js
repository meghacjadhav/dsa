let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = readLine();

for (let i = 1; i <= n; i++) {
  let q = readLine().split(" ");
  let x = q[0];
  let y = q[1];
  if (x > 0 && y > 0) {
    console.log("Q1");
  }
  if (x < 0 && y > 0) {
    console.log("Q2");
  }
  if (x < 0 && y < 0) {
    console.log("Q3");
  }
  if (x > 0 && y < 0) {
    console.log("Q4");
  }
}
