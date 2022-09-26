let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function getEven(arr) {
  let even = arr.filter((val) => {
    if (val % 2 == 0 && val != 0) {
      return val;
    }
  });

  return even;
}
function multiplyByN(arr, n) {
  let mul = arr.map((val) => {
    return val * n;
  });
  return mul;
}
function removeNthIndex(arr, n) {
  arr.splice(n, 1);
  return arr;
}
let arr = readLine().split(",");
let n = readLine();
console.log(getEven(arr));
console.log(multiplyByN(arr, n));
console.log(removeNthIndex(arr, n));
