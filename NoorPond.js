let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let T = parseInt(readLine());
let S = [];
let E = [];
for (let i = 0; i < T; i++) {
  let N = parseInt(readLine());
  for (let j = 0; j < N; j++) {
    let input = readLine().split(" ").map(Number);
    S.push(input[0]);
    E.push(input[1]);
  }
}
