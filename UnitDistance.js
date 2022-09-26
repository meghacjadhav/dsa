let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function isEditDistanceOne(string1, string2) {
  // Complete this function, and return True/False
  let l1 = string1.length;
  let l2 = string2.length;
  let count = 0,
    i = 0,
    j = 0;
  while (i < l1 && j < l2) {
    if (string1[i] == string2[j]) {
      i++;
      j++;
    } else if (string1[i] != string2[j] && count < 1) {
      count++;
      if (count > 1) {
        return "False";
      }
      if (l1 > l2) {
        //delete
        i++;
      } else if (l1 < l2) {
        //add
        j++;
      } else if (l1 == l2) {
        //change
        i++;
        j++;
      }
    }
  }
  if (i < l1 || j < l2) {
    count = 1;
  }
  if (count == 1) {
    return "True";
  } else {
    return "False";
  }
}
let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  var [input_string1, input_string2] = readLine().split(" ");
  console.log(isEditDistanceOne(input_string1, input_string2));
}
