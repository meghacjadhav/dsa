let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let arr = readLine().split(",");
let l = arr.length;
let a = [];
for (let i = 0; i < l; i++) {
  a.push(arr[i]);
}
// console.log(a);
let k = 0;
for (let j = 1; j <= l; j++) {
  if (a[j] == a[j - 1]) {
    continue;
  } else {
    a[k] = a[j - 1];
    k++;
  }
  if (j == l && k < l) {
    while (k <= l) {
      a[k] = "_";
      k++;
    }
  }
}
console.log(a);
