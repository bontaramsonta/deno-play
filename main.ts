//Function to find the sum of contiguous subarray with maximum sum.
function maxSubarraySum(arr: number[], N: number) {
    let max = Number.NEGATIVE_INFINITY;
    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += arr[i];
        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
}
if (import.meta.main) {
    // const s = [1, 2, 3, -2, 5];
    const s = [-47, 43, 94, -94, -93, -59, 31, -86];
    console.log(maxSubarraySum(s, s.length));
}
