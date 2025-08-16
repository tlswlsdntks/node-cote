const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((x) => x.trim());

// 5
// 3 4
// 1 1
// 1 -1
// 2 2
// 3 3
const n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  arr.push({ x, y });
}

arr.sort((a, b) => {
  if (a.x !== b.x) {
    // x 좌표 기준 오름차순
    return a.x - b.x;
  } else {
    // x가 같으면 y 좌표 기준 오름차순
    return a.y - b.y;
  }
});

let answer = "";
for (let x of arr) answer += x.x + " " + x.y + "\n";
console.log(answer);
// 1 -1
// 1 1
// 2 2
// 3 3
// 3 4
