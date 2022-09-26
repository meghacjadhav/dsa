let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
function findLuckyNumber(nums) {
  let count = 1;
  let res = -1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      count++;
    } else {
      if (nums[i - 1] == count) {
        res = nums[i - 1];
        break;
      }
    }
  }
  return res;
}
// DO NOT change anything below this line
let numElems = parseInt(readLine());
let inputArr = [];
for (let index = 0; index < numElems; index++) {
  inputArr.push(parseInt(readLine()));
}
console.log(findLuckyNumber(inputArr));
