let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());

let i = 1;
while (1) {
  if (i % 2 == 0 && i % n == 0) {
    console.log(i);
    break;
  }
  i++;
}
