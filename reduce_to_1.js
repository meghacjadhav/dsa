let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());

for (let i = 1; i <= n; i++) {
  let num = parseInt(readLine());
  if (num <= 2) {
    console.log(-1);
  } else {
    console.log(1);
  }
}
