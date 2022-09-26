let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function recursiveSequence(start, count, num) {
  let i;
  let prod = 1;
  if (count == num + 1) {
    return 0;
  }
  for (i = start; i < start + count; i++) {
    prod = prod * i;
  }
  return prod + recursiveSequence(i, count + 1, num);
}
let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
  let num = parseInt(readLine());
  console.log(recursiveSequence(1, 1, num));
}
