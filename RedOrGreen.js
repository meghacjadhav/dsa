let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let str = readLine().split("");
let len = str.length;
countG = 0;
countR = 0;
for (let i = 0; i < len; i++) {
  if (str[i] == "R") {
    countR++;
  }
  if (str[i] == "G") {
    countG++;
  }
}
console.log(Math.min(countR, countG));
