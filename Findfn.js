let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

function fOfN(n) {
  let res = 0;
  for (let i = 1; i <= n; i = i + 2) {
    res += -i;
    if (i < n) {
      res += i + 1;
    }
  }
  return res;
}

let n = parseInt(readLine());
console.log(fOfN(n));
