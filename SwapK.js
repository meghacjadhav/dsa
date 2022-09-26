let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let firstline = readLine().split(" ");
let N = parseInt(firstline[0]);
let K = parseInt(firstline[1]);
let ans = " ";
let secline = readLine().split(" ");

let temp1 = secline[K - 1];
secline[K - 1] = secline[N - K];
secline[N - K] = temp1;
for (let i = 0; i < N; i++) {
  ans += secline[i] + " ";
}

console.log(ans);
