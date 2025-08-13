const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((line) => line.trim());

const [a, b, c] = input[0].split(" ").map(Number);

if (a === b && b === c) {
  console.log(10_000 + b * 1_000);
} else if (a === b || a === c || b === c) {
  console.log(1_000 + b * 100);
} else {
  console.log(Math.max([a, b, c]) * 100);
}
