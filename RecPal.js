let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function RevStr(str, len, res) {
  res += str[len];
  if (len == 0) {
    return res;
  } else {
    return RevStr(str, len - 1, res);
  }
}
let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
  let str = readLine();
  let len = str.length - 1;
  let res = "";
  let rev = RevStr(str, len, res);
  if (rev === str) {
    console.log("True");
  } else {
    console.log("False");
  }
}
