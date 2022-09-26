let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function getAllBalancedParan(n) {
  var str = new Array(2 * n);
  var res = [];
  if (n > 0) balanceParentheses(res, str, 0, n, 0, 0);
  return res;
}
function balanceParentheses(res, str, pos, n, open, close) {
  if (close == n) {
    let s = "";
    for (let i = 0; i < str.length; i++) {
      s += str[i];
    }
    res.push(s);
    return;
  } else {
    if (open > close) {
      str[pos] = ")";
      balanceParentheses(res, str, pos + 1, n, open, close + 1);
    }
    if (open < n) {
      str[pos] = "(";
      balanceParentheses(res, str, pos + 1, n, open + 1, close);
    }
  }
}
// Do not edit anything below
let n = parseInt(readLine());
let allBalancedParan = getAllBalancedParan(n);
allBalancedParan.sort();
for (expr of allBalancedParan) {
  console.log(expr);
}
