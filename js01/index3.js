// 콘솔창으로 한 줄씩 입력을 받아서 처리하기
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
// 콘솔 입력 창에서 Enter 입력 시 호출
rl.on("line", (line) => {
  input.push(line);
});
// 콘솔 입력 창에서 Ctrl + C 입력 종료 시 호출
rl.on("close", () => {
  console.log(input);
  process.exit();
});
