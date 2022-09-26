let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let ni = parseInt(readLine());
let no = 0;
if (ni > 0 && ni < 7) {
  if (ni == 1) {
    no = 6;
  } else if (ni == 2) {
    no = 5;
  } else if (ni == 3) {
    no = 4;
  } else if (ni == 4) {
    no = 3;
  } else if (ni == 5) {
    no = 2;
  } else {
    no = 1;
  }
  console.log(no);
}
