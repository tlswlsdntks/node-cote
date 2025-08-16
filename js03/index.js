const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((line) => line.trim());

const n = Number(input[0]);

// 시간 복잡도: O(N)
// let summary = 0;
// for (let i = 1; i <= a; i++) {
//   summary += i;
// }
// console.log(summary);

// 등차수열의 합: Sn = N(a+l)/2
// a: 첫째항, l: 마지막항
console.log((n * (1 + n)) / 2);
