let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

function rotateArray(arr) {
  let arr1 = [];
  arr1.push(arr[arr.length - 1]);
  for (let i = 0; i < arr.length - 1; i++) {
    arr1.push(arr[i]);
  }
  return arr1;
}

let arr = readLine().split(" ");
let m = parseInt(readLine());

while (m > 0) {
  arr = rotateArray(arr);
  m--;
}
for (val of arr) {
  console.log(val);
}
