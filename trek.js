const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  let n = parseInt(readLine());
  let steps = readLine();
  let countUp = 0;
  let countDown = 0;
  let count = 0;
  for (let j = 0; j < n; j++) {
    if (steps[j] == "U") {
      countUp++;
    }
    if (steps[j] == "D") {
      countDown++;
    }
    if (countUp - countDown == 0 && steps[j] == "U") {
      count++;
    }
  }
  console.log(count);
}
