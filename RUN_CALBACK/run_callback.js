let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function callingFunction(a, b, cb) {
  let sum = a + b;
  cb(sum);
}
function callBackFunction(sum) {
  console.log(sum);
}
let [a, b] = readLine().split(",").map(Number);
callingFunction(a, b, callBackFunction);
