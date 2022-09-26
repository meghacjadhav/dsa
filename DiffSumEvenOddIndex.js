let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// You should name your function as differenceOfSumOfEvenOddIndexnumbers
// It should take a list of integers
// Return an integer
function differenceOfSumOfEvenOddIndexnumbers(numbers) {
  let oddsum = 0;
  let evensum = 0;
  if (numbers.length == 1) {
    evensum = numbers[0];
    oddsum = 0;
  } else {
    for (let i = 0; i < numbers.length; i = i + 2) {
      evensum += numbers[i];
      if (i + 1 < numbers.length) {
        oddsum += numbers[i + 1];
      }
    }
  }
  return evensum - oddsum;
}
// Do not change anything below this line
function ConvertToNumber(list) {
  for (let each in list) {
    list[each] = Number(list[each]);
  }
}

let numbers = readLine().split(",");
ConvertToNumber(numbers);
console.log(differenceOfSumOfEvenOddIndexnumbers(numbers));
