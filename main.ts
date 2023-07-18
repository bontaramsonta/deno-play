function LongestRepeatingSubsequence(str: string): number {
    const n = str.length;
    const dp: number[][] = Array.from(
        { length: n + 1 },
        () => Array(n + 1).fill(0),
    );
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (str[i - 1] === str[j - 1] && i !== j) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    console.log(dp);
    return dp[n][n];
}
if (import.meta.main) {
    const s = 'axxxy';
    console.log(LongestRepeatingSubsequence(s));
}
