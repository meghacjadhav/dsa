let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function largestElement(A) {
  let max = -999;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > max) {
      max = A[i];
    }
  }
  return max;
}
// --------- Do NOT edit Below this line -----------
function ConvertToNumber(list) {
  for (let each in list) {
    list[each] = Number(list[each]);
  }
}

let n = parseInt(readLine());
let A = readLine().split(" ");
ConvertToNumber(A);
console.log(largestElement(A));
