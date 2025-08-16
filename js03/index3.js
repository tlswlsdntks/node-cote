const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((line) => line.trim());

const n = Number(input[0]);

let result = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
