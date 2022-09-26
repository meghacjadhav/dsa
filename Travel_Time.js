let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let avg_spd = parseInt(readLine());
let dis = 600;
let time = parseInt(dis / avg_spd);

console.log(time);
