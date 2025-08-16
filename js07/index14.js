const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((x) => x.trim());

// 5
// 2 4 -10 4 -9
// 6
// 1000 999 1000 999 1000 999
const n = Number(input[0]);

const arr = input[1].split(" ");

const uniqueArr = [...new Set([...arr].sort((a, b) => a - b))];

const map = new Map();
for (let i = 0; i < uniqueArr.length; i++) {
  map.set(uniqueArr[i], i);
}

const rst = arr.map((x) => map.get(x));

let answer = "";
for (let x of rst) answer += x + " ";
console.log(answer);
