function sortA1ByA2(arr1: number[], arr2: number[]) {
    const map = new Map<number, number>();
    const result: number[] = [];
    // fill map with arr1 frequencies
    for (const num of arr1) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    // fill result in order of arr2 with arr1 frequencies
    for (const num2 of arr2) {
        const freq = map.get(num2) || 0;
        for (let i = 0; i < freq; i++) {
            result.push(num2);
        }
        map.delete(num2);
    }
    // fill result with remaining map keys
    [...map.entries()].sort((a, b) => a[0] - b[0]).forEach(([key, freq]) => {
        for (let i = 0; i < freq; i++) {
            result.push(key);
        }
    });
    return result;
}

if (import.meta.main) {
    const arr1 = [45, 15, 23, 8, 5, 12, 26, 444, 888, 151, 12, 23, 45, 15, 56];
    const arr2 = [15, 888, 444, 5, 8, 12, 23];
    console.log(sortA1ByA2(arr1, arr2));
}
