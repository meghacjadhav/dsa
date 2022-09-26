let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let A = [];
for (let i = 0; i < n; i++) {
  A.push(parseInt(readLine()));
}
let arr = A.map((val) => {
  return val ** 2;
});
arr.sort((a, b) => {
  return a - b;
});
for (let val of arr) {
  console.log(val);
}
