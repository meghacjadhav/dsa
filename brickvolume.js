let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// You should fill this functions using the volume and calculatePrice functions defined below this.
// dimensions is a list with 2 values width and height respectively
// brickCount is int representing total bricks
function calculateTotalPriceOfBricks(dimensions, brickCount) {
  let vol;
  let amnt;
  if (dimensions[0] == -1) {
    if (dimensions[1] == -1) {
      vol = volume(100, 60, 40);
    } else {
      vol = volume(100, 60, dimensions[1]);
    }
  } else if (dimensions[1] == -1) {
    vol = volume(100, dimensions[0], 40);
  } else {
    vol = volume(100, dimensions[0], dimensions[1]);
  }
  amnt = calculatePrice(vol, 0.00005 * brickCount);

  return Math.round(amnt);
}

// Do not change anything below this line
function volume(length = 100, width = 60, height = 40) {
  return length * width * height;
}

function calculatePrice(volume, price = 0.00005) {
  return Math.floor(volume * price);
}
function ConvertToNumber(list) {
  for (let each in list) {
    list[each] = Number(list[each]);
  }
}

let brickCount = parseInt(readLine());
dimensions = readLine().split(" ");
ConvertToNumber(dimensions);
totalPrice = calculateTotalPriceOfBricks(dimensions, brickCount);
console.log(totalPrice);
