let fs = require("fs");
const { format } = require("path/posix");
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

for (let k = 0; k < n; k++) {
  for (let j = k + 1; j < n; j++) {
    if (arr[k] > arr[j]) {
      temp = arr[k];
      arr[k] = arr[j];
      arr[j] = temp;
    }
  }
}
let a = arr.pop();
let b = arr.pop();
let c = arr.pop();

console.log(a * b * c);
