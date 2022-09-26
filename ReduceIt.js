let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function reduceIt(n) {
  if (n <= 0) {
    console.log(n);
  }
  if (n % 2 != 0 && n > 0) {
    n = n - 21;
    reduceIt(n);
  } else if (n % 2 == 0 && n > 0) {
    n = n - 11;
    reduceIt(n);
  }
}
let n = parseInt(readLine());

reduceIt(n);
