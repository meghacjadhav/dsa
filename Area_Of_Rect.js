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
let area = 0;
if (l > b && l > 0 && b > 0) {
  area = l * b;
} else {
  area = 0;
}
console.log(area);
