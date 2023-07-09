function missingNumber(arr: number[]): number {
    arr = arr.filter((e) => e >= 0);
    arr.sort((a, b) => a - b);
    console.log(arr);
    let maxPositiveIntegerFound = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === maxPositiveIntegerFound + 1) {
            maxPositiveIntegerFound++;
        }
    }
    return maxPositiveIntegerFound + 1;
}

if (import.meta.main) {
    const arr = [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12];
    // const arr = [-2, -2, 1, -2, 0, -3, -4, -4, 0];
    console.log(missingNumber(arr));
}
