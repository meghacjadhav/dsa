let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());

for (let i = 1; i <= n; i++) {
  let num = parseInt(readLine());
  let count = 0;
  for (let j = 2; j <= num; j++) {
    if (num % j == 0) {
      count++;
    }
  }
  if (count > 1) {
    console.log("No");
  } else {
    console.log("Yes");
  }
}
