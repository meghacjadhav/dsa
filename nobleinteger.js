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
let count;
let flag = -1;
for (let j = 0; j < n; j++) {
  count = 0;
  for (let k = 0; k < n; k++) {
    if (arr[k] > arr[j]) {
      count++;
    }
  }
  if (count == arr[j]) {
    flag = 1;
  }
}
console.log(flag);
