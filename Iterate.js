let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
let count = 1;
// for (let i = 1; count <= 5; i++) {
//   if (i % n == 0) {
//     console.log(i);
//     count++;
//   }
// }
let i = 1;
while (count <= n) {
  if (i % n == 0) {
    console.log(i);
    count++;
  }
  i++;
}
