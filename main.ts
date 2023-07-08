function findTripletsWithZeroSum(
    arr: number[],
    n: number,
): boolean {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < n - 1; i++) {
        let l = i + 1;
        let r = n - 1;
        const x = arr[i];
        while (l < r) {
            if (x + arr[l] + arr[r] === 0) {
                return true;
            } else if (x + arr[l] + arr[r] < 0) {
                l++;
            } else {
                r--;
            }
        }
    }
    return false;
}

if (import.meta.main) {
    const n = 3;
    const arr = [1, 2, 3];
    // const n = 5;
    // const arr = [0, -1, 2, -3, 1];
    console.log(findTripletsWithZeroSum(arr, n));
}
