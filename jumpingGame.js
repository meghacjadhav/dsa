let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function jumpingGame(N, arr) {
  console.log(jump(0, N, 0, arr, 0));
}
function jump(i, N, sum, arr) {
  if (sum == N && i == N) {
    console.log(i);
    return 1;
  } else if (i >= N) {
    return 0;
  }
  return jump(i + 1, N, sum + arr[i], arr) + jump(i + 1, N, sum + 1, arr);
}
let N = parseInt(readLine());
let arr = readLine().split(" ");
for (let i = 0; i < N; i++) {
  arr[i] = parseInt(arr[i]);
}
jumpingGame(N, arr);
