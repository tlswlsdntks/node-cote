const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((x) => x.trim());

// 7
// hello
// apple
// abc
// apple
// cook
// abc
// robot
const n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}
arr = [...new Set(arr)];

arr.sort((a, b) => {
  if (a.length != b.length) return a.length - b.length;
  else return a - b;
});

for (let x of arr) console.log(x);

// abc
// cook
// apple
// hello
// robot
