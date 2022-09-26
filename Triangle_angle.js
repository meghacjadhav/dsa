let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let a = parseInt(readLine());
let b = parseInt(readLine());

let c = 180 - (30 + 110);
console.log(c);
