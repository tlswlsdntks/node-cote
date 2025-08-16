const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((line) => line.trim());

const testCases = Number(input[0]);

for (let i = 1; i <= testCases; i++) {
  const line = input[i].split(" ").map(Number);
  console.log(line);
  // 첫 번째 수: 데이터의 개수
  const n = line[0];
  // 합계
  let sum = 0;
  for (let j = 1; j <= n; j++) {
    sum += line[j];
  }
  // 평균
  let avg = sum / n;
  // 평균을 넘는 학생 수
  let cnt = 0;
  for (let j = 1; j <= n; j++) {
    if (avg < line[j]) {
      cnt++;
    }
  }

  console.log(`${((cnt / n) * 100).toFixed(3)}%`);
}
