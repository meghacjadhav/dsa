let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

function halfInsertion(str) {
  let n = str.length;
  str = str.split("");

  for (let i = parseInt(n / 2); i < n; i++) {
    let key = str[i];
    let j = i - 1;

    while (key < str[j] && j >= parseInt(n / 2)) {
      str[j + 1] = str[j];
      j--;
    }
    str[j + 1] = key;
  }
  str = str.join("");
  return str;
}

let input_string = readLine().trim();
console.log(halfInsertion(input_string));
