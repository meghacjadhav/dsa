let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = readLine().split(" ");
let sum = 0;
let len = n.length;
for (let i = 0; i < len; i++) {
  let num = parseInt(n[i]);

  if (i % 2 != 0) {
    sum += num * num;
    // console.log(sum);
  }
}
console.log(sum);
