let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let arr1 = [];
let arr2 = [];
let arr3 = [];
let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
  let num = parseInt(readLine());
  arr1.push(num);
}
let n1 = parseInt(readLine());
for (let j = 0; j < n1; j++) {
  let num1 = parseInt(readLine());
  arr2.push(num1);
}
let n2 = parseInt(readLine());
for (let k = 0; k < n2; k++) {
  let num2 = parseInt(readLine());
  arr3.push(num2);
}

let d = new Map();
for (let i = 0; i < n; i++) {
  if (d.has(arr1[i])) {
    d.set(arr1[i], d.get(arr1[i]) + 1);
  } else {
    d.set(arr1[i], 1);
  }
}
for (let j = 0; j < n1; j++) {
  if (d.has(arr2[j])) {
    d.set(arr2[j], d.get(arr2[j]) + 1);
  } else {
    d.set(arr2[j], 1);
  }
}
for (let k = 0; k < n2; k++) {
  if (d.has(arr2[k])) {
    d.set(arr3[k], d.get(arr3[k]) + 1);
  } else {
    d.set(arr3[k], 1);
  }
}
let res = [];
d.forEach((val, key) => {
  if (val == 3) {
    res.push(key);
  }
});
if (res.length > 0) {
  for (let value of res) {
    console.log(value);
  }
} else {
  console.log(-1);
}
