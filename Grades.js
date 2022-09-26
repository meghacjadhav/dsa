let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let grades = [];
for (let i = 0; i < n; i++) {
  let num = parseInt(readLine());
  grades.push(num);
  //   console.log(parseInt(57 % 5));
}
for (let j = 0; j < n; j++) {
  if (grades[j] < 38) {
    grades[j] = grades[j];
  } else {
    if (grades[j] % 5 == 4) {
      grades[j] = grades[j] + 1;
    } else if (grades[j] % 5 == 3) {
      grades[j] = grades[j] + 2;
    } else {
      grades[j] = grades[j] + 0;
    }
  }
}
for (let k in grades) {
  console.log(grades[k]);
}
