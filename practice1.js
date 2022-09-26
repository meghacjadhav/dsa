let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = readLine();
if (Number.isInteger(n)) {
  console.log("True");
} else {
  console.log("False");
}
