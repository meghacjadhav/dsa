let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function bankAccountHacker(start, num) {
  if (start == num) {
    return 1;
  } else if (start > num) {
    return 0;
  } else {
    return (
      bankAccountHacker(start * 10, num) || bankAccountHacker(start * 20, num)
    );
  }
}

let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
  let num = parseInt(readLine());
  let res = bankAccountHacker(1, num);
  if (res == 0) {
    console.log("No");
  } else {
    console.log("Yes");
  }
}
