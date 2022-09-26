let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
let nameMap = new Map();
let sportsMap = new Map();
for (let i = 0; i < n; i++) {
  let [name, sport] = readLine().trim().split(" ");
  if (!nameMap.has(name)) {
    nameMap.set(name, true);
    if (sportsMap.has(sport)) {
      sportsMap.set(sport, sportsMap.get(sport) + 1);
    } else {
      sportsMap.set(sport, 1);
    }
  }
}
let max = Number.NEGATIVE_INFINITY;
for (let k of sportsMap.keys()) {
  max = Math.max(max, sportsMap.get(k));
}
let maxLike = [];
for (let k of sportsMap.keys()) {
  if (sportsMap.get(k) == max) {
    maxLike.push(k);
  }
}

maxLike.sort();
console.log(maxLike[0]);
if (sportsMap.has("football")) {
  console.log(sportsMap.get("football"));
} else {
  console.log(0);
}
