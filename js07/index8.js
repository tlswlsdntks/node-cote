const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((x) => x.trim());

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

arr = [...new Set(arr)];

arr.sort((a, b) => a - b);

let answer = "";
for (let x of arr) answer += x + "\n";
console.log(answer);
