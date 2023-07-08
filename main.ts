function ifPairExistWithGivenSum(arr: number[], sum: number): boolean {
    const set = new Set<number>();
    for (const num of arr) {
        if (set.has(sum - num)) {
            return true;
        }
        set.add(num);
    }
    return false;
}

if (import.meta.main) {
    const arr = new Array(10).fill(0).map((_, i) => i + 1);
    const sum = 14;
    console.log(arr, sum, ifPairExistWithGivenSum(arr, sum));
}
