let fs = require("fs");
const { parse } = require("path/posix");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function recMult(num) {
  let prod = 1;
  let rem = num % 10;
  prod = prod * rem;
  num = parseInt(num / 10);
  if (num > 0) {
    return prod * recMult(num);
  } else {
    return prod;
  }
}
let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  let num = parseInt(readLine());
  if (num == 0) {
    console.log(0);
  } else if (num < 0) {
    num = Math.abs(num);
    let res = recMult(num);
    console.log(-res);
  } else {
    console.log(recMult(num));
  }
}
