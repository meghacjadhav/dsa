let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

function leftToRight(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i][i]);
  }
  return sum;
}
function rightToLeft(arr) {
  let sum = 0;
  j = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i][j--]);
  }
  return sum;
}

let n = parseInt(readLine());
let arr = [];

for (let i = 0; i < n; i++) {
  let num = readLine().split(" ");
  arr.push(num);
}
let diag = leftToRight(arr);
let diag1 = rightToLeft(arr);
console.log(diag + diag1);
