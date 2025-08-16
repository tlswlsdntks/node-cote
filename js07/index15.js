const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((x) => x.trim());

// 7
// 27 Chulsoo
// 30 Gildong
// 25 Soonja
// 25 Zo
// 25 Amy
// 29 Boksoon
// 32 Junghwa
const n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
  const [age, name] = input[i].split(" ");
  arr.push({ age: Number(age), name });
}

arr.sort((a, b) => a.age - b.age); // Node.js의 정렬은 기본적으로 stable -> 키가 동일한 요소가 있다면 먼저 들어온 요소를 우선순위로 한다.

let answer = "";
for (let x of arr) answer += x.age + " " + x.name + "\n";
console.log(answer);
// 25 Soonja
// 25 Zo
// 25 Amy
// 27 Chulsoo
// 29 Boksoon
// 30 Gildong
// 32 Junghwa
