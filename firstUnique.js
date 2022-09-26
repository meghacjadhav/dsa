let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

function firstUnique(str) {
  let D = new Map();
  for (let i = 0; i < str.length; i++) {
    if (D.has(str[i])) {
      D.set(str[i], D.get(str[i]) + 1);
    } else {
      D.set(str[i], 1);
    }
  }
  for (let j = 0; j < str.length; j++) {
    if (D.get(str[j]) == 1) {
      return j;
    }
  }
  return -1;
}

let T = parseInt(readLine());
for (let i = 0; i < T; i++) {
  let str = readLine().trim();
  console.log(firstUnique(str));
}
