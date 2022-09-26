let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
// Do not edit above this line
// Code Here

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  setX(x) {
    this.x = x;
  }
  setY(y) {
    this.y = y;
  }
  distanceXY(x, y) {
    return Math.sqrt((this.x - x) * (this.x - x) + (this.y - y) * (this.y - y));
  }
  distancePoint(second) {
    return Math.sqrt(
      (this.x - second.x) * (this.x - second.x) +
        (this.y - second.y) * (this.y - second.y)
    );
  }
}

// Do not edit below this line
let inp1 = readLine().split(" ");
let inp2 = readLine().split(" ");
let [x1, y1] = [parseInt(inp1[0]), parseInt(inp1[1])];
let [x2, y2] = [parseInt(inp2[0]), parseInt(inp2[1])];

let first = new Point(x1, y1);
let second = new Point(x2, y2);

// Output x coordinate of first point
console.log(first.getX());

// Output Y coordinate of first point
console.log(second.getY());

// Output Distance of first point from origin fixed to 2 decimal places
console.log(first.distanceXY(0, 0).toFixed(2));

// Output Distance of first point from second point fixed to 2 decimal places
console.log(first.distancePoint(second).toFixed(2));
