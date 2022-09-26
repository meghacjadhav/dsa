let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let num = readLine().split(",");
let len = num.length;
let res = [];

for (let i = 0; i < len; i++) {
  if (i % 2 != 0) {
    res[i] = num[len - i];
  } else {
    res[i] = num[i];
  }
}
console.log(res);

// let res = 0;
// while (num > 0) {
//   let rem = num % 10;
//   res = res * 10 + rem;
//   res = res * 10;
//   num = parseInt(num / 10);
//   num = parseInt(num / 10);
// }
// console.log(res);
