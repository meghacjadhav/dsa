let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function Print(L, R, s) {
  s.push(L);
  if (L == R) {
    return s;
  } else {
    return Print(L + 1, R, s);
  }
}
let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  let num = readLine().split(" ");
  let L = parseInt(num[0]);
  let R = parseInt(num[1]);
  let s = [];
  let res = Print(L, R, s);
  console.log(...res);
}
