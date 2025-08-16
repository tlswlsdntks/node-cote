const fs = require("fs");

const input = fs
  .readFileSync(0, "utf-8")
  .split("\n")
  .map((x) => x.trim());

const n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}
console.log(arr);

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
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

// arr.sort();

selectionSort(arr);

let answer = "";
for (let x of arr) answer += x + "\n";
console.log(answer);
