let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
let arr = [];
for (let j = 0; j < n; j++) {
  arr.push(parseInt(readLine()));
}
let i = parseInt(readLine());
let sum = 0;
for (let k = i - 1; k < n; k = k + i) {
  sum += arr[k];
  //   console.log(arr[k]);
}
console.log(sum);
