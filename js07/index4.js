// 병합(merge) 수행 함수
function merge(arr, left, mid, right) {
  let i = left; // 왼쪽 배열의 첫번째 원소
  let j = mid + 1; // 오른쪽 배열의 첫번째 원소
  let k = left; // 결과 배열의 인덱스

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j])
      sorted[k++] = arr[i++]; // 더 작은 값이 결과배열에 들어간다
    else sorted[k++] = arr[j++];
  }
  // 왼쪽 배열에 대한 처리가 다 끝난 경우
  if (i > mid) {
    // 남아있는 오른쪽 배열을 결과배열에 넣어준다
    for (; j <= right; j++) sorted[k++] = arr[j];
  }
  // 오른쪽 배열에 대한 처리가 다 끝난 경우
  else {
    // 남아있는 왼쪽 배열을 결과배열에 넣어준다
    for (; j <= mid; j++) sorted[k++] = arr[i];
  }
  // 정렬된 배열 결과를 원본 배열에 반영하기
  for (let x = left; x <= right; x++) arr[x] = sorted[x];
}

// 병합 정렬
function mergeSort(arr, left, right) {
  // left와 right는 현재 처리 중인 배열 구간의 시작 인덱스와 끝 인덱스.
  // left === right → 구간에 원소가 1개 있음 → 이미 정렬된 상태 → 더 이상 나눌 필요 없음.
  if (left < right) {
    // 원소가 2개 이상이라면
    let mid = parseInt((left + right) / 2); // 2개의 부분 배열로 분할(devide), 중간 위치 인덱스

    // 재귀 함수
    mergeSort(arr, left, mid); // 왼쪽 부분 배열 정렬 수행(conquer)
    mergeSort(arr, mid + 1, right); // 오른쪽 부분 배열 정렬 수행(conquer)
    merge(arr, left, mid, right); // 정렬된 2개의 배열을 하나로 병합(combine)
  }
}

// 1) 병합 정렬의 수행시간 측정
// 0부터 999까지 정수 30000개를 담은 배열 생성
let arr = Array.from({ length: 100_000 }, () =>
  Math.floor(Math.random() * 1_000)
);
let startTime = new Date().getTime();
// 임시 정렬 배열(sorted) 정의
let sorted = Array.from({ length: arr.length }, () => 0);
mergeSort(arr, 0, arr.length - 1);
let endTime = new Date().getTime();
console.log(endTime - startTime, "ms");

// 2) 이미 정렬된 배열에 대한 병합 정렬의 수행시간 측정
arr = Array.from({ length: 100_000 }, () => 7);
startTime = new Date().getTime();
// 임시 정렬 배열(sorted) 정의
sorted = Array.from({ length: arr.length }, () => 0);
mergeSort(arr, 0, arr.length - 1);
endTime = new Date().getTime();
console.log(endTime - startTime, "ms");

// 14 ms
// 13 ms
