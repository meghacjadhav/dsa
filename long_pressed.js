let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

function longPressed(name, str) {
  let nl = name.length;
  let sl = str.length;
  //   let flag;
  let i = 0;
  for (let j = 0; j < sl; j++) {
    if (name[i] == str[j]) {
      i++;
    }
  }
  if (i == nl) {
    return "True";
  } else {
    return "False";
  }
}

let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
  let [name, str] = readLine().split(" ");
  console.log(longPressed(name, str));
}
