// let fs = require("fs");
// let data = fs.readFileSync(0, "utf-8");
// let idx = 0;
// data = data.split("\n");

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }
// let arr = readLine().split(" ").map(Number);
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }
// let i = 0;
// printNumber(i, arr);
// function printNumber(i, arr) {
//   if (i == arr.length) {
//     return;
//   }
//   console.log(arr[i]); //2
//   return printNumber(i + 1, arr); //2
// }
// //x1=printNumber(i, arr);
// //x2=return printNumber(i + 1, arr);

// 3 options:
// 1)jump 1 step
// 2)jump 2 step
// 3)jump 3 step

//function possible ways: min step
minStep(4);
function minStep(value) {
  if (value == 0) {
    return 1;
  }
  if (value < 0) {
    return 0;
  }
  return minStep(value - 1) + minStep(value - 2) + minStep(value - 3);
}
//4
//1,1,1,1
//1,1,2
//2,2
//1,3
//3,1
//2,1,1
//32->minStep(4)
//1 return minStep(value - 1)
//2 return minStep(value - 2)
//3 return minStep(value - 3)
