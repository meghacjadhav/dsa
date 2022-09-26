let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let a = [];

for (let i = 0; i < n; i++) {
  let num = parseInt(readLine());
  a.push(num);
}

let count = 1;
let count_arr = [];

for (let k = 0; k < n; ) {
  count = 1;
  for (let j = k + 1; j < n; j++) {
    if (a[k] == a[j]) {
      count++;
    } else {
      break;
    }
  }
  count_arr[k] = count;
  // console.log(count_arr);
  k = k + count;
}
let max = 0;
let flag = 0;
for (let l = 0; l < n; l++) {
  if (count_arr[l] > max) {
    max = count_arr[l];
    flag = 1;
  }
}
// console.log(max);
let res = [];
for (let m = 0; m < n; m++) {
  if (count_arr[m] == max) {
    console.log(a[m]);
  }
}
if (flag == 0) {
  console.log(-1);
}
