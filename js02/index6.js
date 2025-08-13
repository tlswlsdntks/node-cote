const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((line) => line.trim());

const a = Number(input[0]);

if (90 <= a && a <= 100) {
  console.log("A");
} else if (80 <= a) {
  console.log("B");
} else if (70 <= a) {
  console.log("C");
} else if (60 <= a) {
  console.log("D");
} else {
  console.log("F");
}
