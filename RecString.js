let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function revString(str, len) {
  let res = "";
  if (len < 0) {
    return res;
  } else {
    res = str[len];
    return res + revString(str, len - 1);
  }
}
let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
  let str = readLine();
  let len = str.length - 1;
  // let res = "";
  console.log(revString(str, len));
}
