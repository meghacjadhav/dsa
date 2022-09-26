let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = readLine().split(",");
let ops = [];
for (let k = 0; k < n.length; k++) {
  ops.push(n[k]);
}
var len = ops.length;
let rec = [];
for (let i = 0; i < len; i++) {
  if (ops[i] == "+") {
    let ll = rec.length;
    rec.push(rec[ll - 1] + rec[ll - 2]);
  } else if (ops[i] == "D") {
    let ll = rec.length;
    rec.push(2 * rec[ll - 1]);
  } else if (ops[i] == "C") {
    rec.pop();
  } else {
    rec.push(parseInt(ops[i]));
  }
}
let sum = 0;
for (let j = 0; j < rec.length; j++) {
  sum += rec[j];
}
console.log(sum);
