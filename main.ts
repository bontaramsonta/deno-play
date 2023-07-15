class Stack {
    constructor() {
        this.a = new Array();
    }
    top() {
        return this.a[this.a.length - 1];
    }
    push(x: number) {
        this.a.push(x);
    }
    pop() {
        if (this.a.length != 0) {
            this.a.pop();
        }
    }
    empty() {
        return this.a.length == 0;
    }
}
function deleteMid(s: Stack, sizeOfStack: number) {
    delteFromMid(s, sizeOfStack, 0);
}
function delteFromMid(s: Stack, sizeOfStack: number, current: number) {
    // console.log('[delete]: ', s, sizeOfStack, current);
    if (s.empty() || current == sizeOfStack) {
        return;
    }
    const x = s.top();
    s.pop();
    // console.log('X', Math.ceil((sizeOfStack + 1) / 2));
    if (current === Math.floor((sizeOfStack) / 2)) {
        return;
    }
    delteFromMid(s, sizeOfStack, current + 1);
    s.push(x);
}
if (import.meta.main) {
    const s = new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    s.push(4);
    s.push(5);
    s.push(6);
    deleteMid(s, 6);
    while (!s.empty()) {
        let p = s.top();
        s.pop();
        console.log(p);
    }
}
