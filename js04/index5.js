const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((line) => line.trim());

const n = Number(input[0]);

// 시간 복잡도: O(N)
const arr = input[1].split(" ").map(Number);

const max = Math.max(...arr);

const sum = arr.map((x) => (x / max) * 100).reduce((a, b) => a + b);

const avg = sum / n;

console.log(avg);
