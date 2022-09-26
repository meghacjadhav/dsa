let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let p = parseInt(readLine());
let t = parseInt(readLine());
let r = parseInt(readLine());

let si = (p * t * r) / 100;

console.log(si);
