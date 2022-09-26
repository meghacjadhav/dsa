let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function tribonacci(n) {
  while (n >= 0 && n <= 100) {
    if (n == 0) {
      return 0;
    } else if (n == 1 || n == 2) {
      return 1;
    }
    let n1 = n - 3;
    return tribonacci(n1) + tribonacci(n1 + 1) + tribonacci(n1 + 2);
  }
  return;
}
let n = parseInt(readLine());
console.log(tribonacci(n));
