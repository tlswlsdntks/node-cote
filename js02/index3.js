const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((line) => line.trim());

const line = input[0].split(" ");

const a = Number(line[0]);
const b = Number(line[1]);

console.log(a * b);
