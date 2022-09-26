let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let T = parseInt(readLine());
for (let i = 0; i < T; i++) {
  let N = parseInt(readLine());
  let str = readLine();
  let up = 0;
  let down = 0;
  let mountcount = 0;
  let valcount = 0;
  for (let j = 0; j < N; j++) {
    if (str[j] == "U") {
      up++;
    }
    if (str[j] == "D") {
      down++;
    }
    if (up - down == 0 && str[j] == "U") {
      valcount++;
    }
    if (up - down == 0 && str[j] == "D") {
      mountcount++;
    }
  }
  console.log(Math.abs(valcount - mountcount));
}

// algorithm:
// 1)for j from 1 -> N
// 2)if str[j]=="U" then up++
// 3)if str[j]=="D" then down++
// 4)if up-down==0 and str[j]=="U" then count++
// 5)repeat lines 2 to 4 till j==N
// 6)print count

// testcases:
// 1)2
//   DU

// 2)8
//   DDDDUUUU

// 3)6
//   UUDDDU
