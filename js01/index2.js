// fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n").map((line) => line.trim());;
let input = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((line) => line.trim());

console.log(input);
