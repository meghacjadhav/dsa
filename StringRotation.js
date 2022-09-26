let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function isSubstring(s1, s2) {
  if (String(s1).search(s2) != -1) {
    return "True";
  }
  if (String(s2).search(s1) != -1) {
    return "True";
  }
  return "False";
}

// Do not change anything above
function isRotation(s1, s2) {
  s1 = s1.trim();
  s2 = s2.trim();
  let str = s1.concat(s1);
  console.log(isSubstring(str, s2));
}
// Do not change anything below
let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  var s1 = readLine();
  var s2 = readLine();
  isRotation(s1, s2);
}
