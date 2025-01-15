import { Buffer } from 'node:buffer';

function shiftingLetters(s: string, shifts: number[][]): string {
    const buffer = Buffer.from(s, 'ascii');
    const prefixShiftArray: number[] = new Array(s.length + 1).fill(0);
    for (const [startIdx, endIdx, direction] of shifts) {
        const val = direction === 0 ? -1 : 1;
        const l = startIdx;
        const r = endIdx + 1;
        prefixShiftArray[l] += -val;
        prefixShiftArray[r] += val;
    }
    let diff = prefixShiftArray.at(-1)!;
    console.log(prefixShiftArray.join(','));
    for (let i = prefixShiftArray.length - 2; i >= 0; i--) {
        console.log(buffer[i], diff);
        diff = diff < 0 ? (diff % 26) + 26 : diff;
        buffer[i] = ((buffer[i] - 97 + diff) % 26) + 97;
        diff += prefixShiftArray[i];
    }
    return buffer.toString();
}

if (import.meta.main) {
    const inputStr = 'abc'; // a(0)c(1)e(2)
    const inputShifts = [[0, 1, 0], [1, 2, 1], [0, 2, 1]];
    const result = shiftingLetters(inputStr, inputShifts);
    console.log(result);
}
