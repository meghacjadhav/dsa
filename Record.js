let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let score = readLine().split(" ").map(Number);
let max = score[0];
let min = score[0];
let countmax = 0;
let countmin = 0;
for (let i = 1; i < n; i++) {
  if (score[i] > max) {
    max = score[i];
    countmax++;
  }
  if (score[i] < min) {
    min = score[i];
    countmin++;
  }
}
console.log(countmax + " " + countmin);
