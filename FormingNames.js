let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
// let n = parseInt(readLine());
// let str = readLine().split("");
// let arr = readLine().split(" ");
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (arr.indexOf(str[i]) != -1) {
//     count++;
//   }
// }
// if (count == str.length) {
//   console.log("true");
// } else {
//   console.log("false");
// }
let n = parseInt(readLine());
let str = readLine().split("");
let arr = readLine().split(" ");
let count = 0;
let d = new Map();
for (let i = 0; i < arr.length; i++) {
  //   if (arr.indexOf(str[i]) != -1) {
  //     count++;
  //   }
  if (d.has(arr[i])) {
    d.set(arr[i], d.get(arr[i]) + 1);
  } else {
    d.set(arr[i], 1);
  }
}

for (let j = 0; j < str.length; j++) {
  if (d.get(str[j]) > 0) {
    count++;
  }
}

if (count == str.length) {
  console.log("true");
} else {
  console.log("false");
}
