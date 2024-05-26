function longestCommonSubsequence(a: string, b: string) {
  const dp = new Array(a.length + 1).fill(0).map(() =>
    new Array(b.length + 1).fill(0)
  );
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  console.log(dp);
  return dp[a.length][b.length];
}

function minCostToMakeStringsIdentical(
  a: string,
  b: string,
  costX: number,
  costY: number,
) {
  const lcs = longestCommonSubsequence(a, b);
  const diffA = a.length - lcs;
  const diffB = b.length - lcs;
  return diffA * costX + diffB * costY;
}
if (import.meta.main) {
  const str1 = 'abcd';
  const str2 = 'acdb';
  const costX = 10;
  const costY = 20;
  console.log(minCostToMakeStringsIdentical(str1, str2, costX, costY));
}
