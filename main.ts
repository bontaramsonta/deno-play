
const dp = [0,1]

export function fibonnaciNth(n: number): number {
  dp[n] = (dp[n-1] === undefined ? fibonnaciNth(n-1) : dp[n-1]) + (dp[n-2] === undefined ? fibonnaciNth(n-2) : dp[n-2])
  return dp[n]
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("fibonnaciNth =", fibonnaciNth(100));
  // console.log(dp)
}

Deno.bench({
  name: "baseline",
  group: 'group',
  baseline: true,
  fn: () => {
    fibonnaciNth(10)
  }
})

Deno.bench({
  name: "edge case",
  group: 'group',
  fn: () => {
    fibonnaciNth(9)
  }
})