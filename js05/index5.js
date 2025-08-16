const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((x) => x.trim());

const line = input[0].trim().split(" ");

console.log(line);
if (line == "") {
  console.log(0);
} else {
  console.log(line.length);
}
