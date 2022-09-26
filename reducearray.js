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
for (let i = 0; i < n; i++) {
  let num = parseInt(readLine());
  arr.push(num);
}

let m = arr[0];
for (let j = 1; j < n; j++) {
  m += arr[j];

  if (j + 1 < n) {
    m -= arr[j + 1];
    j++;
  }
}
console.log(m);
