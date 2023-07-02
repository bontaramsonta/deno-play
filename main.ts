// const fizzerMap = {
//     3: 'fizz',
//     5: 'buzz',
//     7: 'ripp',
// };
const fizzerMap = new Map();
fizzerMap.set(3, 'fizz');
fizzerMap.set(5, 'buzz');
fizzerMap.set(7, 'ripp');
function fizzBuzz(num: number): string {
    let result = '';
    if (num === 0) {
        return result;
    }
    let n = num;
    for (const [k, v] of fizzerMap) {
        if (n % k === 0) {
            result += v;
            n = n / k;
        }
    }
    return result;
}
if (import.meta.main) {
    const results: string[] = [];
    for (let i = 0; i < 100; i++) {
        results.push(fizzBuzz(i));
    }
    console.log(results.map((s, i) => `[${i}] ${s}`).join('\n'));
}
