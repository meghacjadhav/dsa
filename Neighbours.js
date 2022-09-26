let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function Neighbours(panelSize) {
  let res = "";
  panel(panelSize, 0, 0, 0, res);
}
function panel(panelSize, i, adjacentA, adjacentB, res) {
  if (i === panelSize) {
    console.log(res);
    return;
  }
  if (adjacentA < 2) {
    panel(panelSize, i + 1, adjacentA + 1, 0, res + "a");
    if (adjacentB < 2) {
      panel(panelSize, i + 1, 0, adjacentB + 1, res + "b");
    }
  } else {
    panel(panelSize, i + 1, 0, adjacentB + 1, res + "b");
  }
}
let N = parseInt(readLine());
Neighbours(N);
