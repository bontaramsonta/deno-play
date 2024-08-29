class Node {
  data: number;
  next: Node | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}
const nodeMap = new Map<Node, number>();

function countNodesInLoop(head: Node) {
  let current: Node | null = head;
  let index: number = 0;
  while (current) {
    console.log(current.data, '->');
    if (nodeMap.has(current)) {
      return index - nodeMap.get(current)!;
    }
    nodeMap.set(current, index);
    current = current.next;
    index++;
  }
  return 0;
}

if (import.meta.main) {
  // LinkedList: 25->14->19->33->10->21->39->90->58->45->33
  const head = new Node(25);
  const second = new Node(14);
  const third = new Node(19);
  const fourth = new Node(33); // also eleventh
  const fifth = new Node(10);
  const sixth = new Node(21);
  const seventh = new Node(39);
  const eighth = new Node(90);
  const ninth = new Node(58);
  const tenth = new Node(45);
  head.next = second;
  second.next = third;
  third.next = fourth;
  fourth.next = fifth;
  fifth.next = sixth;
  sixth.next = seventh;
  seventh.next = eighth;
  eighth.next = ninth;
  ninth.next = tenth;
  tenth.next = fourth;
  console.log(countNodesInLoop(head));
}
