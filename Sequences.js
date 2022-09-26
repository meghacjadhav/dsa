let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let N = parseInt(readLine());
let arr = readLine().split(" ").map(Number);
let d = new Map();

for (let i = 0; i < N; i++) {
  if (d.has(arr[i])) {
    d.set(arr[i], d.get(arr[i]) + 1);
  } else {
    d.set(arr[i], 1);
  }
}
let j = d.get(arr[0]);
let res = [];
let temp = [];
while (j > 0) {
  temp = [];
  for (let i = 0; i < N; i++) {
    // console.log(temp.includes(arr[i]) === false);
    if (d.get(arr[i]) == j && temp.includes(arr[i]) == false) {
      d.set(arr[i], d.get(arr[i]) - 1);
      temp.push(arr[i]);
      // console.log(temp);
    }
  }
  j--;
  res.push(temp);
}
console.log(res.length);
for (let val of res) {
  console.log(...val);
}
