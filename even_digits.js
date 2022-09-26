let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let nums = readLine().split(",");

let count = 0;
let len = nums.length;
// console.log(len);
let c = 0;
for (let i = 0; i < len; i++) {
  count = 0;
  //   console.log(nums[i]);
  while (nums[i] > 0) {
    nums[i] = parseInt(nums[i] / 10);
    count++;
  }
  //   console.log(count);
  if (count % 2 == 0) {
    c++;
  }
}
console.log(c);
