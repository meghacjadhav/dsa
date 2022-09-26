let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// let N = parseInt(readLine());
// let arr = readLine().split(" ").map(Number);
// let steepScore = [];
// for (let i = 0; i < N; i++) {
//   steepScore.push(Math.max(...arr.slice(i, N)) - arr[i]);
// }
// console.log(
//   steepScore.reduce((add, val) => {
//     return (add += val);
//   })
// );
let n = parseInt(readLine());
let arr = readLine().split(" ").map(Number);

let max = arr[n - 1];
let newArr = [...arr];
let steepScore = [];
for (let i = n - 1; i >= 0; i--) {
  if (newArr[i] > max) {
    max = newArr[i];
  } else {
    newArr[i] = max;
  }
  steepScore[i] = newArr[i] - arr[i];
}
console.log(
  steepScore.reduce((add, val) => {
    return (add += val);
  })
);
