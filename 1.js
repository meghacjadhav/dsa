let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let k = parseInt(readLine()); //k
let str = readLine().trim().split(" "); //string
let d = new Map(); //Map
for (let i = 0; i < str.length; i++) {
  let word = str[i];
  if (d.has(word)) {
    d.set(word, d.get(word) + 1);
  } else {
    d.set(word, 1);
  }
}
let res = [];
d.forEach((val, key) => {
  if (val > k) {
    res.push(key);
  }
});
res.sort();
if (res.length == 0) {
  console.log("no such names in this town!!!");
} else {
  for (let i = 0; i < res.length; i++) {
    console.log(res[i]);
  }
}
