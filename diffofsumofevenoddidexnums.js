let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function differenceOfSumOfEvenOddIndexnumbers(numbers) {
  let l = numbers.length;
  let even = 0;
  let odd = 0;
  if (l <= 1) {
    for (let i = 0; i < l; i = i + 2) {
      even += numbers[i];
    }
    odd = 0;
    return even - odd;
  } else {
    for (let i = 0; i < l; i = i + 2) {
      even += numbers[i];
    }
    for (let j = 1; j < l; j = j + 2) {
      odd += numbers[j];
    }
    return even - odd;
  }
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
