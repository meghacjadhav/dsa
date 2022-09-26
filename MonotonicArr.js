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
for (let i = 0; i < n; i++) {
  let num = parseInt(readLine());
  arr.push(num);
}
let monoinc = 1;
let monodec = 1;
for (let j = 1; j < n; j++) {
  if (arr[j] >= arr[j - 1]) {
    monoinc++;
  }
  if (arr[j] <= arr[j - 1]) {
    monodec++;
  }
}

if (monoinc == n || monodec == n) {
  console.log(true);
} else {
  console.log(false);
}
