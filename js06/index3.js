// 큐
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enq(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  deq() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let queue = new Queue();
queue.enq(5);
queue.enq(2);
queue.enq(3);
queue.enq(7);
queue.deq();
queue.enq(1);
queue.enq(4);
queue.deq();

while (queue.getLength() != 0) {
  console.log(queue.deq());
}
// 3
// 7
// 1
// 4
