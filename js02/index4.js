const fs = require("fs");

const line = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((line) => line.trim())[0]
  .split(" ");

const a = Number(line[0]);
const b = Number(line[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);
