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

let res = [];
for (let j = 0; j < n; j++) {
  let flag = 1;
  for (let k = j + 1; k < n; k++) {
    if (a[j] <= a[k]) {
      flag = 0;
      break;
    }
  }
  if (flag == 1) {
    res.push(a[j]);
  }
}
for (let m = res.length - 1; m >= 0; m--) {
  console.log(res[m]);
}
