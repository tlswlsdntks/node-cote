const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((line) => line.trim());

// 시간 복잡도: O(N)
const set = new Set(); // 집합{} 자료형

input
  .map(Number)
  .map((x) => x % 42)
  .forEach((x) => set.add(x));

console.log(set.size);
