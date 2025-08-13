const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((line) => line.trim());

// 472
// 385
const a = input[0];
const b = input[1];

console.log(Number(a) * Number(b[2]));
console.log(Number(a) * Number(b[1]));
console.log(Number(a) * Number(b[0]));
console.log(Number(a) * Number(b));
