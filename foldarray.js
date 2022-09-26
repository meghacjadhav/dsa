let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
  let num = parseInt(readLine());
  arr.push(num);
}
let fold = parseInt(readLine());
let ans = [];
for (let i = 0; i < fold; i++) {
  n = arr.length;

  let mid = Math.floor(n / 2);
  for (let j = 0; j < mid; j++) {
    {
      ans.push(arr[j] + arr[n - j - 1]);
    }
  }
  if (n % 2 != 0) {
    ans.push(arr[mid]);
  }
  arr = ans;
  ans = [];
}
let l = arr.length;
console.log(l);
for (let k = 0; k < l; k++) {
  console.log(arr[k]);
}
