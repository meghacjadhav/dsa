let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let t = parseInt(readLine());

while (t > 0) {
  t--;
  let N = parseInt(readLine());
  let str = readLine();
  let count = 0;
  let L = new Map();
  for (let i = 0; i < N; i++) {
    if (L.has(str[i])) {
      count += L.get(str[i]);
      L.set(str[i], L.get(str[i]) + 1);
    } else {
      L.set(str[i], 1 + 0);
    }
  }
  console.log(count);
}
