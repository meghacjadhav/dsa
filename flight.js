let fs = require("fs");
const { uptime } = require("process");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
class Flight {
  sum = 0;
  constructor(upTime, downTime) {
    this.upTime = upTime;
    this.downTime = downTime;
  }
  calculateFlight() {
    //write your code here
    this.upTime = this.upTime.split(":");
    this.downTime = this.downTime.split(":");
    // console.log(this.upTime[0]);
    // console.log(this.downTime[0]);

    return (
      (this.downTime[0] - this.upTime[0]) * 60 +
      (this.downTime[1] - this.upTime[1])
    );
  }
}

// -------- Do NOT edit anything below this line ----------
let upTime = readLine();
let downTime = readLine();
let NewFlight = new Flight(upTime, downTime);
console.log(NewFlight.calculateFlight());
