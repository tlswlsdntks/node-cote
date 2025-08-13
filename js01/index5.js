/**
 * reduce() 메서드는 배열의 각 요소에 대해 reducer 함수를 실행한 뒤에 하나의 결과를 반환합니다.
 */

let data = [5, 2, 9, 8, 4];

let min = data.reduce((a, b) => Math.min(a, b));
console.log(min); // 2

let sum = data.reduce((a, b) => a + b);
console.log(sum); // 28
