const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((x) => x.trim());

const line = input[0].split(" ").map(Number);

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; i < arr.length; j++) {
      if (arr[minIdx] > arr[j]) minIdx = j;
    }
    // [2] 1 3
    // 2 [1] 3
    // 1 2 3
    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
}

// line.sort();

selectionSort(line);

let answer = "";
for (let x of line) answer += x + " ";
console.log(answer);
