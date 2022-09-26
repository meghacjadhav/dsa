let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let t = parseInt(readLine());
let table = [];
let bill = [];

for (let i = 0; i < n; i++) {
  let num = parseInt(readLine());
  table.push(num);
}

for (let j = 0; j < n; j++) {
  let num1 = parseInt(readLine());
  bill.push(num1);
}

// console.log(table);
// console.log(bill);
let total = [];
for (let j = 1; j <= t; j++) {
  temp = 0;
  for (let k = 0; k < n; k++) {
    if (table[k] == j) {
      temp = temp + bill[k];
    }
  }
  total.push(temp);
}
console.log(total);

let max = Math.max(...total);

for (let j = 0; j < t; j++) {
  if (total[j] == max) {
    // console.log(j + 1);
  }
}
