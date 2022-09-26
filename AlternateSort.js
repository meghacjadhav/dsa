let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  let arr = readLine().split(" ").map(Number);
  let len = arr.length;
  for (let j = 0; j < len; j = j + 2) {
    for (let k = j + 2; k < len; k = k + 2) {
      if (arr[j] < arr[k]) {
        let temp = arr[j];
        arr[j] = arr[k];
        arr[k] = temp;
      }
    }
  }
  for (let j = 1; j < len; j = j + 2) {
    for (let k = j + 2; k < len; k = k + 2) {
      if (arr[j] > arr[k]) {
        let temp = arr[j];
        arr[j] = arr[k];
        arr[k] = temp;
      }
    }
  }
  console.log(...arr);
}
