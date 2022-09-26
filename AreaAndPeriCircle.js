let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Your class should be named `Circle`.
// Method to get area should be named `getArea`
// Method to get circumference should be named `getCircumference`.
// Your class should take radius `r` as input when creating an object.
class Circle {
  pi = 3.14;
  constructor(radius) {
    if (radius <= 0) {
      this.radius = 0;
    } else {
      this.radius = radius;
    }
  }
  getArea() {
    let area = this.radius * this.radius * this.pi;
    return Math.ceil(area);
  }
  getCircumference() {
    let circumference = 2 * this.pi * this.radius;
    return Math.ceil(circumference);
  }
}
// -------- Do NOT edit anything below this line ----------

let oneCircle = new Circle(parseInt(readLine()));
console.log(oneCircle.getArea());
console.log(oneCircle.getCircumference());
