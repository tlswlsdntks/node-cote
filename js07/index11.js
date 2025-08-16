const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((x) => x.trim());

// 5
// 0 4
// 1 2
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
  if (a.y !== b.y) {
    return a.y - b.y;
  } else {
    return a.x - b.x;
  }
});

let answer = "";
for (let x of arr) answer += x.x + " " + x.y + "\n";
console.log(answer);
// 1 -1
// 1 2
// 2 2
// 3 3
// 0 4
