// 정수에 대한 오름차순 정렬 예시
let arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];

// function compare(a, b) {
//   if (a < b) return -1;
//   else if (a > b) return 1;
//   else return 0;
// }

// function compare(a, b) {
//   return a - b;
// }

// arr.sort(compare);
arr.sort((a, b) => a - b);

console.log(arr);
// [ 1, 2, 3, 5, 7, 8, 9, 15, 21 ]

// 정수에 대한 내림차순 정렬 예시
arr.sort((a, b) => b - a);

console.log(arr);
// [ 21, 15, 9, 8, 7, 5, 3, 2, 1 ]

// 문자열에 대한 오름차순 정렬 예시
let arr2 = ["fineapple", "banana", "durian", "apple", "carrot"];

arr2.sort();
console.log(arr2);
// [ 'apple', 'banana', 'carrot', 'durian', 'fineapple' ]

// 문자열에 대한 내림차순 정렬 예시
arr2.sort((a, b) => {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
});
console.log(arr2);
// [ 'fineapple', 'durian', 'carrot', 'banana', 'apple' ]

// 문자열에 대한 오름차순 정렬 예시 (대소문자 구분X)
let arr3 = ["fineapple", "Banana", "Durian", "Apple", "carrot"];
arr3.sort((a, b) => {
  let upperCaseA = a.toUpperCase();
  let upperCaseB = b.toUpperCase();
  if (upperCaseA < upperCaseB) return -1;
  else if (upperCaseA > upperCaseB) return 1;
  else return 0;
});
console.log(arr3);
// [ 'Apple', 'Banana', 'carrot', 'Durian', 'fineapple' ]

// 객체에 대하여 원하는 기준으로 오름차순 정렬 에시
let arr4 = [
  { name: "홍길동", score: 90 },
  { name: "김철수", score: 85 },
  { name: "박영희", score: 97 },
];

arr4.sort((a, b) => b.score - a.score);
console.log(arr4);
// [
//   { name: '박영희', score: 97 },
//   { name: '홍길동', score: 90 },
//   { name: '김철수', score: 85 }
// ]
