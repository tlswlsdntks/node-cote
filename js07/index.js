// 선택 정렬
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }

    // 스와프(swap)
    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
}

// 1) 선택 정렬의 수행시간 측정
// 0부터 999까지 정수 30000개를 담은 배열 생성
let arr = Array.from({ length: 30_000 }, () =>
  Math.floor(Math.random() * 1_000)
);
let startTime = new Date().getTime();
selectionSort(arr);
let endTime = new Date().getTime();
console.log(endTime - startTime, "ms");

// 2) 이미 정렬된 배열에 대한 선택 정렬의 수행시간 측정
arr = Array.from({ length: 30_000 }, () => 7);
startTime = new Date().getTime();
selectionSort(arr);
endTime = new Date().getTime();
console.log(endTime - startTime, "ms");

// 342 ms
// 324 ms
