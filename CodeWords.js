let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let code = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];
let t = parseInt(readLine());
while (t > 0) {
  t--;
  let str = readLine().trim().split(" ");
  let res = new Set();
  for (let i = 0; i < str.length; i++) {
    let concat = "";
    let word = str[i];
    for (let j = 0; j < word.length; j++) {
      concat += code[word.charCodeAt(j) - 97];
    }
    res.add(concat);
  }
  console.log(res.size);
}
