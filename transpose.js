let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// you should return a list of lists
function transposeMatrix(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let ans = [];
  temp = [];

  for (let k = 0; k < n; k++) {
    for (let j = 0; j < m; j++) {
      ans.push(matrix[j][k]);
    }
    temp.push(ans);
    ans = [];
  }
  return temp;
}

// do not change anything below this line
let m = parseInt(readLine());
let matrix = [];
for (let index = 0; index < m; index++) {
  let row = readLine().split(" ");
  matrix.push(row);
}
let result = transposeMatrix(matrix);
for (row of result) {
  console.log(...row);
}
