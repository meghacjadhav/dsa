let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let k = parseInt(readLine());
let str = readLine().trim().split(" ");
let L = new Map();
for (let i = 0; i < str.length; i++) {
  if (L.has(str[i])) {
    L.set(str[i], L.get(str[i]) + 1);
  } else {
    L.set(str[i], 1 + 0);
  }
}
let res = [];

L.forEach((val, key) => {
  if (val > k) {
    res.push(key);
  }
});
res.sort();
if (res.length == 0) {
  console.log("no such names in this town!!!");
} else {
  for (let a in res) {
    console.log(res[a]);
  }
}
