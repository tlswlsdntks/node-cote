// 삽입 정렬
function insertionSort(arr) {
  // 첫 번째 요소는 정렬됐다는 가정
  for (let i = 1; i < arr.length; i++) {
    // 인덱스 j부터 1까지 1씩 감소하며 반복
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        // 한 칸씩 왼쪽으로 이동
        // 스와프(swap)
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
}
// 5 [9] 2 7
// 5 9 [2] 7 -> 5 [2] 9 7 -> 2 5 9 7
// 2 5 9 [7] -> 2 5 7 9

// 1) 삽입 정렬의 수행시간 측정
// 0부터 999까지 정수 30000개를 담은 배열 생성
let arr = Array.from({ length: 30_000 }, () =>
  Math.floor(Math.random() * 1_000)
);
let startTime = new Date().getTime();
insertionSort(arr);
let endTime = new Date().getTime();
console.log(endTime - startTime, "ms");

// 2) 이미 정렬된 배열에 대한 삽입 정렬의 수행시간 측정
arr = Array.from({ length: 30_000 }, () => 7);
startTime = new Date().getTime();
insertionSort(arr);
endTime = new Date().getTime();
console.log(endTime - startTime, "ms");

// 266 ms
// 0 ms
