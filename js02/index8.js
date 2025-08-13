const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((line) => line.trim());

// 14 30
// 20
// 17 40
// 80

// 입력으로 주어진 시각을 '분'의 형태로 바꾸기
let [hour, minute] = input[0].split(" ").map(Number);

const addMinute = Number(input[1]);

const totalMinute = hour * 60 + minute + addMinute;
totalMinute %= 60 * 24;

hour = parseInt(totalMinute / 60);
minute = totalMinute % 60;

console.log(hour + " " + minute);
