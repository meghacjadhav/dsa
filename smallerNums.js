let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let nums = [];

for (let i = 0; i < n; i++) {
  nums.push(parseInt(readLine()));
}
let arr = [...nums];
for (let i = 1; i < n; i++) {
  let j = i - 1;
  let key = arr[i];
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = key;
}
let res = [];
for (let k = 0; k < n; k++) {
  res.push(arr.indexOf(nums[k]));
}
for (let val of res) {
  console.log(val);
}
