let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function addSubtract(arr, n, k) {
  console.log(Calculate(0, n, k, arr, 0));
}
function Calculate(i, n, k, arr, sum) {
  if (i == n && sum == k) {
    return 1;
  } else if (i >= n) {
    return 0;
  }
  return (
    Calculate(i + 1, n, k, arr, sum + arr[i]) +
    Calculate(i + 1, n, k, arr, sum - arr[i]) +
    Calculate(i + 1, n, k, arr, sum)
  );
}
let k = parseInt(readLine());
let n = parseInt(readLine());
let arr = readLine().split(" ");
for (let i = 0; i < n; i++) {
  arr[i] = parseInt(arr[i]);
}

addSubtract(arr, n, k);
