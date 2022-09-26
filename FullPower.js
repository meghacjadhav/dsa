let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let T = parseInt(readLine());
for (let i = 0; i < T; i++) {
  let N = parseInt(readLine());
  let A = readLine().split(" ").map(Number);
  let power = 0;
  let count = 0;
  for (let j = 0; j < N; j = j + 2) {
    if (A[j + 1] < A[j] && count == 0) {
      count++;
      let temp = A[j + 1];
      A[j + 1] = A[j];
      A[j] = temp;
    }
    if (A[j + 1] - A[j] > power) {
      power = A[j + 1] - A[j];
    }
  }
  console.log(power);
}
