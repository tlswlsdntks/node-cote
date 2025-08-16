const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((line) => line.trim());

const n = Number(input[0]);

const line = input[1].split(" ").map((x) => Number(x));

// 정답 1)
// /**
//  * 모든 정수는 -100_000_000보다 크거나 같고
//  * 1_000_000보다 작거나 같은 정수이다.
//  */
// let min = 100_000_001; // 일단 큰 수로 초기화
// let max = -100_000_001; // 일단 작은 수로 초기화

// // 시간 복잡도: O(N)
// for (let i = 0; i < n; i++) {
//   if (min > line[i]) min = line[i];
//   if (max < line[i]) max = line[i];
// }

// 정답 2)
// 시간 복잡도: O(N)
const min = line.reduce((a, b) => Math.min(a, b));
const max = line.reduce((a, b) => Math.max(a, b));

console.log(min + " " + max);
