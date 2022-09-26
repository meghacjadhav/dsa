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
  let [x1, v1, x2, v2] = readLine().split(" ").map(Number);
  let k1 = x1 + v1;
  let k2 = x2 + v2;
  let flag = "NO";
  for (let j = 0; j < 10; j++) {
    if (k1 == k2) {
      flag = "YES";
    } else {
      k1 = k1 + v1;
      k2 = k2 + v2;
    }
  }
  console.log(flag);
}

// 3,6  6,8  9,10  12,12
// 2,8  4,11 6,14   8,17
