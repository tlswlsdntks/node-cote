const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((x) => x.trim());

const check = (line) => {
  let set = new Set();

  for (let i = 0; i < line.length; i++) {
    // ab
    if (line[i] !== line[i + 1]) {
      // bab
      if (set.has(line[i + 1])) {
        return false;
      } else {
        set.add(line[i + 1]);
      }
    }
  }

  return true;
};

const n = Number(input[0]);
let sum = 0;
for (let i = 1; i <= n; i++) {
  if (check(input[i])) sum++;
}

console.log(sum);
