let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function peakElement(arr, n) {
  if (n == 1) {
    return 1;
  }
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      if (arr[i + 1] < arr[i]) {
        return i + 1;
      }
    }
    if (i == n - 1) {
      if (arr[i - 1] < arr[i]) {
        return n;
      }
    }
    if (i > 0 && i < n - 1) {
      if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        return i + 1;
      }
    }
  }
  return -1;
}
let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  let n = parseInt(readLine());
  let arr = readLine().trim().split(" ").map(Number);
  console.log(peakElement(arr, n));
}

// let t = parseInt(readLine());
// for (let i = 0; i < t; i++) {
//   let n = parseInt(readLine());
//   let arr = readLine().trim().split(" ").map(Number);
//   let res = [];
//   for (let j = 0; j < n; j++) {
//     if (arr[j - 1] == undefined) {
//       arr[j - 1] = arr[j] - 1;
//     }
//     if (arr[j + 1] == undefined) {
//       arr[j + 1] = arr[j] - 1;
//     }
//     if (arr[j] > arr[j - 1] && arr[j] > arr[j + 1]) {
//       res.push(j + 1);
//     }
//   }
//   if (res.length == 0) {
//     console.log(-1);
//   } else {
//     console.log(res[0]);
//   }
// }
