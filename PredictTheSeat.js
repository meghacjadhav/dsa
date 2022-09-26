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
let n = parseInt(readLine());

let berth = ["L", "M", "U", "L", "M", "U", "SL", "SU"];

for (let i = 1; i <= n; i++) {
  let num = readLine().split(" ");

  let total_berths = parseInt(num[0]);
  let berth_number = parseInt(num[1]);

  if (berth_number > total_berths) {
    console.log("Invalid");
  } else {
    berth_number = berth_number % 8;
    if (berth_number == 0) {
      console.log(berth[7]);
    } else {
      console.log(berth[berth_number - 1]);
    }
  }
}
