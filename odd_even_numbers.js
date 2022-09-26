let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let odd = 0;
let even = 0;
for (let i = 0; i < n; i++) {
  let num = parseInt(readLine());
  if (num % 2 == 0) {
    even++;
  } else if (num % 2 != 0) {
    odd++;
  }
}
console.log(odd);
console.log(even);
