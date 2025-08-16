const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((line) => line.trim());

const count = input[0];

let result = "";
for (let i = 1; i <= count; i++) {
  const line = input[i].split(" ");
  const a = Number(line[0]);
  const b = Number(line[1]);
  // 빠른 입출력 방식
  result += a + b + "\n";
}

console.log(result);
