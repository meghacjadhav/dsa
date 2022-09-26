let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
for (let i = 1; i <= 5; i++) {
  let n = parseInt(readLine());
  if (n == 42) {
    break;
  }
  console.log(n);
}
