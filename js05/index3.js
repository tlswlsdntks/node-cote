const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((x) => x.trim());

// 734 893
const [a, b] = input[0].split(" ");

let newA = a[2] + a[1] + a[0];
let newB = b[2] + b[1] + b[0];

console.log(Math.max(Number(newA), Number(newA)));
