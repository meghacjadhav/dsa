let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  let totalSum = [];
  let con = 0;
  let n = parseInt(readLine());

  for (let j = 0; j < n; j++) {
    let input = readLine().split(" ").map(Number);
    totalSum.push(input[0] + input[1]);
    con = con + input[1];
  }
  totalSum.sort((a, b) => b - a);
  console.log(totalSum[0] + totalSum[1] - con);
}
