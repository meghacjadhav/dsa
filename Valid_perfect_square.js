let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let num = parseInt(readLine());
let flag = "False";
for (let i = 0; i < num + 1 / 2; i++) {
  if (i * i == num) {
    flag = "True";
  }
}
console.log(flag);
