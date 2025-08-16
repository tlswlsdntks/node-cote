// 버블 정렬
function bubbleSort(arr) {
  // i: 마지막 원소는 이미 확정이어서 다음 번엔 검사할 필요가 없다.
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// 1) 버블 정렬의 수행시간 측정
// 0부터 999까지 정수 30000개를 담은 배열 생성
let arr = Array.from({ length: 30_000 }, () =>
  Math.floor(Math.random() * 1_000)
);
let startTime = new Date().getTime();
bubbleSort(arr);
let endTime = new Date().getTime();
console.log(endTime - startTime, "ms");

// 2) 이미 정렬된 배열에 대한 버블 정렬의 수행시간 측정
arr = Array.from({ length: 30_000 }, () => 7);
startTime = new Date().getTime();
bubbleSort(arr);
endTime = new Date().getTime();
console.log(endTime - startTime, "ms");

// 1093 ms
// 374 ms
