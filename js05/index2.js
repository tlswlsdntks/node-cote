const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((line) => line.trim());

const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  const [r, s] = input[i].split(" ");

  let result = "";
  for (let j = 0; j < s.length; j++) {
    result += s.charAt(j).repeat(r);
  }

  console.log(result);
}
