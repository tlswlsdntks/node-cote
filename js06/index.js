// 빈 배열 생성
let arr = [];
arr.push(7);

let arr2 = new Array();
arr2.push(7);

// 하나의 값으로 초기화
let arr3 = Array.from({ length: 5 }, () => 7);

// 2차원 배열
let arr4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 한 줄로 2차원 배열 초기화
let arr5 = Array.from(Array(3), () => new Array(3));
// [ [ <3 empty items> ], [ <3 empty items> ], [ <3 empty items> ] ]

// 반복문을 이용해 2차원 배열 초기화
let arr6 = new Array(3);
for (let i = 0; i < arr6.length; i++) {
  arr6[i] = Array.from({ length: 5 }, (_, j) => i * 4 + j);
}
// [ [ 0, 1, 2, 3, 4 ], [ 4, 5, 6, 7, 8 ], [ 8, 9, 10, 11, 12 ] ]

// 동적 배열
let arr7 = [5, 6, 7, 8, 9];
arr.length = 8;
arr7[7] = 3;
arr.push(1);
for (let x of arr7) console.log(x);
// 5
// 6
// 7
// 8
// 9
// undefined
// undefined
// 3

// 여러 개의 배열을 합친 결과
let arr8 = [1, 2, 3];
let arr9 = [1, 2, 3];
console.log(arr8.concat(arr9, [11, 12], [13]));
// [ 1,  2,  3,  1, 2, 3, 11, 12, 13]

// 특정 구간 원소 반환
let arr10 = [1, 2, 3, 4, 5];
console.log(arr10.slice(2, 4));
// [ 3, 4 ]

// 인덱스 반환
let arr11 = [7, 3, 5, 6, 6, 2, 1];
console.log(arr11.indexOf(5)); // 2
console.log(arr11.indexOf(6)); // 3
console.log(arr11.indexOf(8)); // -1
