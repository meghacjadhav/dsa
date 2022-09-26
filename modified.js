let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function modified(st) {
  let len = st.length;
  let count = 0;
  let flag;
  for (let i = 0, j = len - 1; i < parseInt(len / 2); i++) {
    if (st[i] == st[j - i]) {
      flag = "True";
    } else if (st[i] != st[j - i] && count <= 0) {
      count++;
      flag = "True";
      continue;
    } else if (st[i] != st[j - i] && count > 0) {
      flag = "False";
      break;
    }
  }
  return flag;
}

let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  let st = readLine();
  console.log(modified(st));
}
