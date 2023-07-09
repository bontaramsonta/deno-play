function separateChaining(hashSize: number, arr: number[]): number[][] {
    const hashTable: number[][] = new Array(hashSize).fill(0).map(() => []);
    for (let i = 0; i < arr.length; i++) {
        const hash = Math.abs(arr[i]) % hashSize;
        hashTable[hash].push(arr[i]);
    }
    return hashTable;
}

if (import.meta.main) {
    const hashSize = 10;
    const arr = [92, 4, 14, 24, 44, 91];
    // const arr = [-2, -2, 1, -2, 0, -3, -4, -4, 0];
    console.log(separateChaining(hashSize, arr));
}
