let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function compress(st) {
  let s = "";
  let len = st.length;
  let i = 1;
  let count = 1;
  if (len > 0) {
    while (i <= len) {
      if (st[i] == st[i - 1]) {
        count++;
      } else {
        if (count == 1) {
          s += st[i - 1];
        } else {
          s += st[i - 1] + count;
          count = 1;
        }
      }
      i++;
      // if (i == len) {
      //   if (count == 1) {
      //     s += st[i - 1];
      //   } else {
      //     s += st[i - 1] + count;
      //   }
      // }
    }
    console.log(s);
  } else {
    return -1;
  }
}
let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  st = readLine();
  compress(st);
}
