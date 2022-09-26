let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let [N, Q] = readLine().split(" ").map(Number);
let time = readLine().split(" ").map(Number);
let scores = readLine().split(" ").map(Number);
let sum = 0;
let temp = [];
time.sort((a, b) => b - a);
for (let i = 0; i < N; i++) {
  temp[i] = sum + time[i];
  sum = temp[i];
}
for (let j = 0; j < Q; j++) {
  let K = parseInt(readLine());
  console.log(temp[K - 1]);
}
