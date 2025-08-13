const fs = require("fs");

const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(0, "utf-8")
  .toString()
  .split("\n")
  .map((line) => line.trim());
const line = input[0].split(" ");

const a = Number(line[0]);
const b = Number(line[1]);

// ctrl + z
console.log(a + b);
