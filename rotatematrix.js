let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function rotatematrix(row) {
  let n = row[0].length;

  let ans = [];
  temp = [];
  // console.log(n);
  for (let k = 0; k < n; k++) {
    for (let j = m - 1; j >= 0; j--) {
      ans.push(row[j][k]);
    }
    //   console.log(ans)
    temp.push(ans);
    ans = [];
  }
  return temp;
}

let m = parseInt(readLine());
let row = [];
for (let i = 0; i < m; i++) {
  row.push(readLine().split(" "));
}
let newmatrix = rotatematrix(row);
console.log(newmatrix.length);
for (row of newmatrix) {
  console.log(...row);
}

// let n = row[0].length;

// let ans = [];
// temp = [];
// // console.log(n);
// for (let k = 0; k < n; k++) {
//   for (let j = m - 1; j >= 0; j--) {
//     ans.push(row[j][k]);
//   }
//   //   console.log(ans)
//   temp.push(ans);
//   ans = [];
// }
// console.log(temp.length);
// console.log(temp);
