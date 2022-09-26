let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Your class should be named as `Rectangle`.
// Method to get area should be named as `rectangleArea`.
// Method to get perimeter should be named as `rectanglePerimeter`.
// You should be taking `length` and `width` as inputs when creating the object for your class.
class Rectangle {
  constructor(length, width) {
    if (length > 0 && width > 0) {
      this.length = length;
      this.width = width;
    } else {
      this.length = 0;
      this.width = 0;
    }
  }
  rectangleArea() {
    return this.length * this.width;
  }
  rectanglePerimeter() {
    return 2 * (this.length + this.width);
  }
}

let length = parseInt(readLine());
let width = parseInt(readLine());
let newRectangle = new Rectangle(length, width);
console.log(newRectangle.rectangleArea());
console.log(newRectangle.rectanglePerimeter());
