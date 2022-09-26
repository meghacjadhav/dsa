let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function replaceElements(arr) {
  //   let a = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     let s = arr.slice(i + 1, arr.length);
  //     a.push(Math.max(...s));
  //   }
  //   a[arr.length - 1] = -1;
  //   return a;
  let max = -1;
  let a;
  let n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    a = arr[i];
    arr[i] = max;
    max = Math.max(max, a);
  }
  return arr;
}

// Do not edit anything below
let numElems = parseInt(readLine());
let arr = [];
for (let index = 0; index < numElems; index++) {
  arr.push(parseInt(readLine()));
}
let res = replaceElements(arr);
for (elem of res) {
  console.log(elem);
}
