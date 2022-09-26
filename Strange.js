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
let count = 0;
let sum = 0;
let prod = 1;
for (let i = 0; i < n; i++) {
  let num = parseInt(readLine());
  arr.push(num);
}
for (let j = 0; j < n; j++) {
  sum = 0;
  prod = 1;
  if (arr[j] == 0) {
    count++;
  } else {
    while (arr[j] > 0) {
      let rem = parseInt(arr[j] % 10);
      sum += rem;
      prod *= rem;
      arr[j] = parseInt(arr[j] / 10);
    }
    if (sum >= prod) {
      count++;
    }
  }
}
console.log(count);
