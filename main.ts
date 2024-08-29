class LinkedList {
  private Node: new (data: number) => {
    data: number;
    next: InstanceType<LinkedList['Node']> | null;
  } = class {
    data: number;
    next: InstanceType<LinkedList['Node']> | null;
    constructor(data: number) {
      this.data = data;
      this.next = null;
    }
  };

  private head: InstanceType<LinkedList['Node']> | null;
  private current: InstanceType<LinkedList['Node']> | null;

  constructor() {
    this.head = null;
    this.current = null;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data, '->');
      current = current.next;
    }
    console.log('null');
  }
  from(arr: number[]) {
    if (arr.length === 0) return;
    this.head = new this.Node(arr[0]);
    let current = this.head;
    let i = 1;
    while (i < arr.length) {
      current.next = new this.Node(arr[i]);
      current = current.next;
      i++;
    }
    this.current = this.head;
  }
  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current.data;
      current = current.next;
    }
  }
  reset() {
    this.current = this.head;
  }
  add(data: number) {
    if (this.current) {
      this.current.next = new this.Node(data);
      this.current = this.current.next;
    } else {
      this.head = new this.Node(data);
      this.current = this.head;
    }
  }
  get(): number | null {
    return this.current ? this.current.data : null;
  }
}

if (import.meta.main) {
  const list = new LinkedList();
  list.from([1, 2, 3, 4, 5, 6]);
  list.print();
  list.reset();
  for (const data of list) {
    console.log(data);
  }
  list.reset();
  list.print();
  list.add(7);
  list.print();
}
