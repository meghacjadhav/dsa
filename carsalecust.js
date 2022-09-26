let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Your class should be named `CarSell`.
// Your method should be named `getPromisingCustomers`
// Your method should return the indices of customers who are willing to pay greater than or equal to 90% of the car value
class CarSell {
  i;
  res = [];
  constructor(customerProposals) {
    this.customerProposals = customerProposals;
  }
  getPromisingCustomers() {
    for (this.i = 0; this.i < this.customerProposals.length; this.i++) {
      if (this.customerProposals[this.i] >= 0.9 * 1000000) {
        this.res.push(this.i);
      }
      if (this.i == customerProposals.length - 1) {
        if (this.res.length < 1) {
          this.res.push(-1);
        }
      }
    }

    return this.res;
  }
}

let numCustomers = parseInt(readLine());
let customerProposals = [];
for (let i = 0; i < numCustomers; i++) {
  customerProposals.push(parseInt(readLine()));
}
// console.log(customerProposals);
let car = new CarSell(customerProposals);

for (let j of car.getPromisingCustomers()) {
  console.log(j);
}
