let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Following function takes integer and should return True if it's prime
// otherwise  should return False.
function isPrime(inputNumber) {
  let count = 0;
  if (inputNumber > 1) {
    for (let i = 2; i < inputNumber; i++) {
      if (i != inputNumber && inputNumber % i == 0) {
        count++;
      }
    }
    if (count > 0) {
      return "False";
    } else {
      return "True";
    }
  } else {
    return "False";
  }
}

//Please don't change anything below this line.
let number = parseInt(readLine());
console.log(isPrime(number));
