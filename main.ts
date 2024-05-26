const a = [8, 3, 1, 5, -6, 6, 2, 2];
const sum = 4;

function longestSubsequenceWithGivenSum(arr: number[], sum: number) {
  const hash = new Map<number, number>();
  let maxLen = 0;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    const v = hash.get(currentSum - sum);
    if (v === undefined) {
      if (!hash.has(currentSum)) {
        hash.set(currentSum, i);
      }
    } else {
      const len = i - v;
      if (len > maxLen) {
        maxLen = len;
      }
    }
  }
  return maxLen;
}
const result = longestSubsequenceWithGivenSum(a, sum);
console.log(result);
