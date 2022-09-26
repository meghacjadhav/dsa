let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
function modifiedPalindrome(st) {
  if (st.length < 1) {
    return "False";
  }
  let res = isPalindrome(st);
  // console.log("res=" + res);//False
  if (res == "False") {
    return removeOne(st);
    // console.log("res=" + res + " " + st);
  } else {
    return "True";
  }
}
function isPalindrome(st) {
  let len = st.length;
  let j = len - 1;
  let flag = "True";
  for (let i = 0; i < parseInt(len / 2); i++) {
    if (st[i] == st[j]) {
      flag = "True";
      j--;
    } else {
      flag = "False";
      break;
    }
  }
  return flag;
}

function removeOne(s) {
  let len = s.length;
  let flag;
  let s1 = s.split("");
  let s2 = s.split("");
  let count1 = 0,
    count2 = 0;
  for (let i = 0, j = len - 1; i < parseInt(len / 2); i++) {
    if (s[i] != s[j] && count1 == 0) {
      s1[i] = "";
      count1++;
      // console.log("s1=" + );
      let res = isPalindrome(s1.join(""));
      // console.log("res s1=" + res + s1);
      if (res == "True") {
        flag = "True";
        break;
      }
    }
    if (s[i] != s[j] && flag != "True" && count2 == 0) {
      s2[j] = "";
      count2++;
      // console.log("s2=" + );
      let res = isPalindrome(s2.join(""));
      // console.log("res s2=" + res + s2);
      if (res == "True") {
        flag = "True";
        break;
      }
    }
    if (s[i] != s[j] && count1 > 0 && count2 > 0) {
      flag = "False";
    } else {
      j--;
    }
  }
  return flag;
}
let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
  let st = readLine();
  console.log(modifiedPalindrome(st));
}
