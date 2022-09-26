let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
class InputReader {
  //implement the methods here

  readStrings(n) {
    for (let i = 0; i < n; i++) {
      {
        console.log(`${i} ${readLine()}`);
      }
    }
  }
  readIntegers(n) {
    for (let i = 0; i < n; i++) {
      {
        console.log(`${i} ${parseInt(readLine())}`);
      }
    }
  }
  readFloats(n) {
    for (let i = 0; i < n; i++) {
      {
        console.log(`${i} ${parseFloat(readLine()).toFixed(2)}`);
      }
    }
  }
}

// -------- Do NOT edit anything below this line ----------

let num = parseInt(readLine());
let typeOfInput = readLine();
let NewInputReader = new InputReader();
if (typeOfInput === "string") {
  NewInputReader.readStrings(num);
} else if (typeOfInput === "integer") {
  NewInputReader.readIntegers(num);
} else {
  NewInputReader.readFloats(num);
}
