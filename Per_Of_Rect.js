let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let l = parseInt(readLine());
let b = parseInt(readLine());
let per = 1;
if (l > b && l > 0 && b > 0) {
  per = 2 * (l + b);
} else {
  per = 0;
}
console.log(per);
