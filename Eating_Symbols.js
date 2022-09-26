let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let i = 0;
let s = readLine();
let len = s.length;

for (let j = 0; j < len; j++) {
  if (s[j] == "+") {
    i++;
  } else if (s[j] == "-") {
    i--;
  }
}
console.log(i);
