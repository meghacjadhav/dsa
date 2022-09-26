const { Console } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let Input = readLine().split(" ");
let N = parseInt(Input[0]);
let K = parseInt(Input[1]);

// let R = parseInt(N / K);
// console.log(R);
if (N % K == 0) {
  console.log(0);
} else if (N % K == 1) {
  console.log(1);
}
