const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((x) => x.trim());

// 2143
// 999998999
const line = input[0];

// 0부터 9까지 각 숫자(digit)의 출현 빈도를 담은 배열 선언
let cnt = Array(10).fill(0); // 초기 빈도 값은 0으로 초기화

for (let x of line) {
  // cnt[i]++
  cnt[Number(x)]++;
}

let answer = "";
// 9부터 0까지 하나씩 숫자를 확인
for (let i = 9; i >= 0; i--) {
  for (let j = 0; j < cnt[i]; j++) {
    // 9: cnt[i] -> 8
    // 8: cnt[i] -> 1
    // 99999999+8
    answer += i;
  }
}
console.log(answer);
