let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let res = [];
let dl = readLine();
let tired = readLine();
let sober = readLine();

if (dl === "You have driving licence") {
  res.push("true");
} else {
  res.push("false");
}
if (tired === "You are not tired") {
  res.push("true");
} else {
  res.push("false");
}
if (sober === "You are sober") {
  res.push("true");
} else {
  res.push("false");
}
if (res[0] == "true" && res[1] == "true" && res[2] == "true") {
  console.log("You can drive");
} else if (res[0] == "false" && (res[1] == "false" || res[2] == "false")) {
  console.log("You cannot drive");
} else if (res[0] == "true" || res[1] == "false" || res[2] == "false") {
  console.log("You shouldn't drive");
}
