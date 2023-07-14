function check(A: number[], B: number[], _N: number): boolean {
    const frequencyMap = new Map();
    // seed the map
    for (const element of A) {
        frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
    }
    for (const element of B) {
        const frequency = frequencyMap.get(element);
        if (frequency === undefined) {
            return false;
        } else if (frequency === 1) {
            frequencyMap.delete(element);
        } else {
            frequencyMap.set(element, frequency - 1);
        }
    }
    return [...frequencyMap.keys()].length === 0;
}
if (import.meta.main) {
    const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const B = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const N = 10;
    console.log(check(A, B, N));
}
