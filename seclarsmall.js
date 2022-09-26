let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let arr = readLine().split(" ");
let secsmall = 999;
let min = 999;
let max = -999;
let secmax = -999;

for (let i = 0; i < n; i++) {
  let num = parseInt(arr[i]);
  if (num > max || num > secmax) {
    if (num > max) {
      secmax = max;
      max = num;
    } else {
      secmax = num;
    }
  }
  if (num < min || num < secsmall) {
    if (num < min) {
      secsmall = min;
      min = num;
    } else {
      secsmall = num;
    }
  }
}
console.log(` 2nd Largest:${secmax} and 2nd Smallest:${secsmall} `);
