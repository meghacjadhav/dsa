let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let [mass, height] = readLine().split(",").map(Number);
if (mass > 0 && height > 0) {
  let BMI = mass / (height * height);
  console.log(BMI);
} else {
  console.log("INVALID INPUT");
}
