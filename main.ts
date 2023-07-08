function printNonRepeated(arr: number[]): number[] {
    const map = new Map<number, number>();
    const nonRepeating = [];
    arr.forEach((element) => {
        map.set(element, (map.get(element) || 0) + 1);
    });
    for (const [key, value] of map.entries()) {
        if (value === 1) {
            nonRepeating.push(key);
        }
    }
    return nonRepeating;
}

if (import.meta.main) {
    const arr = [1, 1, 2, 2, 3, 3, 7, 5, 6, 4];
    console.log(printNonRepeated(arr));
}
