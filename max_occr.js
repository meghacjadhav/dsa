let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let arr = readLine().split(" ");

let len = arr.length;

for (let i = 0; i < len; ) {
  let n = parseInt(arr[i]);
  let curr_occur = 1;
  for (let j = i + 1; j < len; j++) {
    let num = parseInt(arr[j]);
    if (n == num) {
      curr_occur++;
    } else {
      break;
    }
  }
  i = i + curr_occur;
  console.log(n + "exists" + curr_occur + "times");
}
