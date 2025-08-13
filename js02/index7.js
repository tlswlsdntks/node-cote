const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((line) => line.trim());

const line = input[0].split(" ");

// 10 10
let hour = Number(line[0]);
let minute = Number(line[1]);

if (minute < 45) {
  hour -= 1;
  if (hour < 0) {
    hour = 23;
  }
  minute += 15;
} else {
  minute = minute - 45;
}

console.log(hour + " " + minute);
