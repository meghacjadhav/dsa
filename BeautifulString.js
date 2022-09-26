let fs = require("fs");
const { format } = require("path/posix");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function beautiful(str, len) {
  let countA = 0,
    countB = 0,
    countC = 0;
  let d = new Map();
  let res = 0;
  d.set("0 0", 1);
  for (let i = 0; i < len; i++) {
    if (str[i] === "a") countA++;
    else if (str[i] == "b") countB++;
    else if (str[i] === "c") countC++;

    if (d.has(countA - countB + " " + (countA - countC))) {
      res += d.get(countA - countB + " " + (countA - countC));
      d.set(
        countA - countB + " " + (countA - countC),
        d.get(countA - countB + " " + (countA - countC)) + 1
      );
    } else {
      d.set(countA - countB + " " + (countA - countC), 1);
    }
  }
  return res;
}
let T = parseInt(readLine());
for (let i = 0; i < T; i++) {
  let str = readLine().trim();
  let len = str.length;
  console.log(beautiful(str, len));
}
