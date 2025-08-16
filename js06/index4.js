const PriorityQueue = require("./PriorityQueue.js");
// 힙

// 최대힙(Max Heap)
let pq = new PriorityQueue(function (a, b) {
  return a.cash - b.cash;
});

pq.enq({ cash: 250, name: "Doohyun Kim" });
pq.enq({ cash: 300, name: "Gildong Hong" });
pq.enq({ cash: 150, name: "Minchul Han" });

console.log(pq.size()); // 3
console.log(pq.deq()); // { cash: 300, name: 'B' }
console.log(pq.peek()); // { cash: 250, name: 'A' }
console.log(pq.size()); // 2
