import { assert, assertEquals } from 'jsr:@std/assert';

class MinHeap {
  private heap: number[];

  constructor(arr: number[] = []) {
    this.heap = arr;
    if (arr.length < 2) {
      return this;
    }
    const parentOfLastNode = this.parent(this.heap.length - 1);
    for (let i = parentOfLastNode; i >= 0; i--) {
      this.minHeapify(i);
    }
    return this;
  }

  static from(arr: number[]) {
    return new MinHeap(arr);
  }

  getSize() {
    return this.heap.length;
  }

  getHeight() {
    return Math.floor(Math.log2(this.heap.length));
  }

  print() {
    if (this.heap.length === 0) {
      console.log('Heap is empty.');
      return;
    }
    return this.heap.join(', ');
  }

  checkMinHeapProperty() {
    const size = this.heap.length;
    if (size < 2) {
      return true;
    }
    for (let pos = size - 2; pos > 0; pos--) {
      const parentPos = this.parent(pos);
      if (this.heap[parentPos] > this.heap[pos]) {
        return false;
      }
    }
    return true;
  }

  insert(num: number) {
    this.heap.push(num);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMin() {
    this.swap(0, this.heap.length - 1);
    const min = this.heap.pop();
    this.minHeapify(0);
    return min;
  }

  decrease(index: number, newValue: number) {
    const currentValue = this.heap[index];
    if (!currentValue) {
      throw new Error('index out of bounds');
    }
    if (newValue > currentValue) {
      throw new Error('value passed is greater than current value');
    }
    this.heap[index] = newValue;
    this.bubbleUp(index);
  }

  // time Complexity: O(logn)
  private minHeapify(pos: number) {
    const left = this.left(pos);
    const right = this.right(pos);
    let smallest = pos;
    if (
      left < this.heap.length && this.heap[left] < this.heap[smallest]
    ) {
      smallest = left;
    }
    if (
      right < this.heap.length &&
      this.heap[right] < this.heap[smallest]
    ) {
      smallest = right;
    }
    console.log(
      'min heapify',
      { left, right, pos, smallest, heap: this.heap },
    );
    if (smallest !== pos) {
      this.swap(smallest, pos);
      this.minHeapify(smallest);
    }
  }

  delete(pos: number) {
    if (!this.getSize()) {
      return;
    }
    this.decrease(pos, Number.NEGATIVE_INFINITY);
    this.extractMin();
  }

  private bubbleUp(pos: number) {
    if (pos === 0) {
      return;
    }
    const parent = this.parent(pos);
    if (this.heap[pos] >= this.heap[parent]) {
      return;
    }
    this.swap(pos, parent);
    this.bubbleUp(parent);
  }

  private swap(posA: number, posB: number) {
    const temp = this.heap[posA];
    this.heap[posA] = this.heap[posB];
    this.heap[posB] = temp;
  }

  private parent(pos: number) {
    return Math.floor((pos - 1) / 2);
  }

  private left(pos: number) {
    return 2 * pos + 1;
  }

  private right(pos: number) {
    return 2 * pos + 2;
  }
}

Deno.test('construct min heap by inserting one by one', () => {
  const heap = new MinHeap();
  const arr = [29, 5, 10, 15, 12, 21];
  console.log('[insert] arr of elements to insert', arr);
  for (const e of arr) {
    heap.insert(e);
  }
  console.log('[insert] heap after inserts', heap);
  assertEquals(6, heap.getSize(), 'heap size not matching');
  assert(
    heap.checkMinHeapProperty(),
    `min heap property violated \n${heap.print()}`,
  );
});

Deno.test('construct min heap from arr directly', async (t) => {
  const arr = [29, 5, 10, 15, 12, 21];
  console.log('[from] arr to create heap from', arr);

  await t.step('using new', () => {
    const heap = new MinHeap(arr);
    console.log('[from] heap created directly from arr', heap);
    assertEquals(6, heap.getSize(), 'heap size not matching');
    assert(
      heap.checkMinHeapProperty(),
      `min heap property violated \n${heap.print()}`,
    );
  });

  await t.step('using from', () => {
    const heap = MinHeap.from(arr);
    console.log('[from] heap created directly from arr', heap);
    assertEquals(6, heap.getSize(), 'heap size not matching');
    assert(
      heap.checkMinHeapProperty(),
      `min heap property violated \n${heap.print()}`,
    );
  });
});

Deno.test('extract min', () => {
  const arr = [29, 5, 10, 15, 12, 21];
  const heap = MinHeap.from(arr);
  assertEquals(heap.getSize(), 6);
  const min = heap.extractMin();
  assertEquals(min, 5, 'extracted min value is not correct');
  assertEquals(heap.getSize(), 5);
  assert(heap.checkMinHeapProperty(), heap.print());
});

Deno.test('decrement key', () => {
  const heap = MinHeap.from([29, 5, 10, 15, 12, 21]);
  heap.decrease(2, 3);
  assert(heap.checkMinHeapProperty());
  assertEquals(heap.extractMin(), 3);
});

Deno.test('delete key', () => {
  const heap = MinHeap.from([29, 5, 10, 15, 12, 21]);
  heap.delete(2);
  assert(heap.checkMinHeapProperty());
  assertEquals(heap.getSize(), 5);
});

if (import.meta.main) {
  const arr = [29, 5, 10, 15, 12, 21];
  console.log('[from] arr to create heap from', arr);
  const heap = new MinHeap(arr);
  console.log('[from] heap created directly from arr', heap);
}
