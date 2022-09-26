let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let nums = [],
  indices = [],
  target = [];

for (let i = 0; i < n; i++) {
  nums.push(parseInt(readLine()));
}
for (let i = 0; i < n; i++) {
  indices.push(parseInt(readLine()));
}
for (let j = 0; j < n; j++) {
  if (target[indices[j]] == undefined) {
    target[indices[j]] = nums[j];
  } else if (target[indices[j]] != undefined) {
    let k = target.length - 1;
    while (k >= 0 && k >= indices[j]) {
      target[k + 1] = target[k];
      k--;
    }
    target[indices[j]] = nums[j];
  }
}
for (let val of target) {
  console.log(val);
}
