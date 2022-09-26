let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let m = parseInt(readLine());
let n = parseInt(readLine());

let i = m;
let c = 0;
while (i <= n) {
  if (i >= 0) {
    console.log(i);
    c++;
  }
  i++;
}
if (c == 0) {
  console.log(-1);
}
