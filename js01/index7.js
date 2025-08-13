let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
console.log(`원소의 개수: ${set.size}`);
console.log(`원소의 포함 관계: ${set.has(7)}`);

set.delete(4);

for (let item of set) {
  console.log(item);
}
