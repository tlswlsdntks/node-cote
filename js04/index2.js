const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((line) => line.trim());

let max = 0;
let maxIdx = 0;

// 정답 1)
// // 시간 복잡도: O(N)
// for (let i = 0; i < 9; i++) {
//   const n = Number(input[i]);
//   if (max < n) {
//     max = n;
//     maxIdx = i + 1;
//   }
// }

// 정답 2)
// 시간 복잡도: O(N)
const arr = input.map(Number);
max = Math.max(...arr);
maxIdx = arr.indexOf(max) + 1;

console.log(max);
console.log(maxIdx);
