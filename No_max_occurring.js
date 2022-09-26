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
let res = -1;
for (let j = 0; j < n; ) {
  count = 1;
  let no = a[j];
  for (let k = j + 1; k < n; k++) {
    if (no == a[k]) {
      count++;
    } else {
      break;
    }
  }

  j = j + count;
  if (count == 4) {
    res = no;
  }
}
console.log(res);
