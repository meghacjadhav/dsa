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
  let n = parseInt(readLine());
  let Hg = readLine().split(" ").map(Number);
  let Hb = readLine().split(" ").map(Number);
  Hg.sort((a, b) => a - b);
  Hb.sort((a, b) => b - a);
  let count = 0;
  for (let j = 0; j < n; j++) {
    if (Hg[j] % Hb[j] == 0 || Hb[j] % Hg[j] == 0) {
      count++;
    }
  }
  console.log(count);
}
