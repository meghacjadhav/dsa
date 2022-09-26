let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function numberOfDivisors(num) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (i == parseInt(num / i)) {
        count++;
      } else {
        count = count + 2;
      }
    }
  }
  return count;
}
let N = parseInt(readLine());
let arr = readLine().trim().split(" ").map(Number);
let d = new Map();
for (let i = 0; i < N; i++) {
  let x = numberOfDivisors(arr[i]);
  if (d.has(x)) {
    d.set(x, d.get(x) + 1);
  } else {
    d.set(x, 1);
  }
}

let pair = 0;
d.forEach((val, key) => {
  pair += parseInt((val * (val - 1)) / 2);
});

console.log(pair);
