let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let firstline = readLine().split(" ");
let n = parseInt(firstline[0]);
let m = parseInt(firstline[1]);
let sum = 0;
let arr = [];
for (let i = 0; i < n; i++) {
  let nums = readLine().split(" ");
  let temp = [];
  for (let j = 0; j < m; j++) {
    let nums1 = parseInt(nums[j]);
    temp.push(nums1);
  }
  arr.push(temp);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] % 2 != 0) {
      sum += arr[i][j];
    }
  }
}

console.log(sum);
