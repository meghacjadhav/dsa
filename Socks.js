let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let arr = readLine().split(" ").map(Number);
let d = new Map();
for (let i = 0; i < n; i++) {
  if (d.has(arr[i])) {
    d.set(arr[i], d.get(arr[i]) + 1);
  } else {
    d.set(arr[i], 1);
  }
}
let count = 0;
d.forEach((val, key) => {
  count += parseInt(val / 2);
});
console.log(count);
