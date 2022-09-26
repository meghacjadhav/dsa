let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function sumOfFirstN(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumOfFirstN(n - 1);
  }
}

let n = parseInt(readLine());
for (let i = 1; i <= n; i++) {
  console.log(i, sumOfFirstN(i));
}
