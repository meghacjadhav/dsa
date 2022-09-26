let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());

for (let i = 0; i < n; i++) {
  let n1 = readLine().split(" ");
  let n2 = readLine().split(" ");

  let res = "";
  let carry = 0;
  let i = 0;
  let j = 0;
  while (i < n1.length || j < n2.length) {
    let sum = 0;
    if (i < n1.length) {
      sum += parseInt(n1[i]);
    }
    if (j < n2.length) {
      sum += parseInt(n2[j]);
    }
    sum += carry;
    res = res + (sum % 10);
    carry = parseInt(sum / 10);
    i++;
    j++;
  }
  if (carry > 0) {
    res = res + carry;
  }
  console.log(res);
}
