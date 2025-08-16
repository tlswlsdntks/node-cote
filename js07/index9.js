const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((x) => x.trim());

const [n, k] = input[0].split(" ").map(Number);

const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

console.log(arr[k - 1]);
