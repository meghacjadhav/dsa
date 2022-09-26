const { debug } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// function insertionSort(A, n) {
//   for (let i = 1; i < n; i++) {
//     let key = A[i];
//     let j = i - 1;
//     while (key < A[j] && j >= 0) {
//       A[j + 1] = A[j];
//       j--;
//     }
//     A[j + 1] = key;
//   }
//   return A;
// }

// function Convert_to_number(list) {
//   for (let each in list) {
//     list[each] = Number(list[each]);
//   }
// }

// let len = parseInt(readLine());
// for (let i = 0; i < len; i++) {
//   let n = parseInt(readLine());
//   let arr = readLine().split(" ");
//   Convert_to_number(arr);
//   console.log(...insertionSort(arr, n));
// }

function stringInsertionSort(str) {
  let n = str.length;
  str = str.split("");
  for (let i = 1; i < n; i++) {
    let key = str[i];
    let j = i - 1;

    while (key < str[j] && j >= 0) {
      str[j + 1] = str[j];
      j--;
    }
    str[j + 1] = key;
  }
  str = str.join("");
  return str;
}

//DO NOT CHANGE ANYTHING BELOW THIS LINE

let input_string = readLine().trim();
console.log(stringInsertionSort(input_string));
