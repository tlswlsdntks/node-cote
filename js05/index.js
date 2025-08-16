const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((line) => line.trim());

const n = Number(input[0]);

let sum = 0;
for (let x of input[1]) {
  sum += Number(x);
}

console.log(sum);
