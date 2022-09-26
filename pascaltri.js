let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

function calculateNrow(n) {
  if (n == 1) {
    return [1];
  } else if (n == 2) {
    return [1, 1];
  } else {
    let prev = [1, 1];
    let cur = [];

    for (let row = 3; row <= n; row++) {
      cur = [1];
      for (let j = 1; j <= row - 2; j++) {
        cur[j] = prev[j] + prev[j - 1];
      }
      cur.push(1);
      prev = cur;
    }
    return cur;
  }
}

let n = parseInt(readLine());
let nrow = calculateNrow(n);

for (let i = 0; i < n; i++) {
  console.log(nrow[i]);
}
