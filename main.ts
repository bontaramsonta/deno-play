
export function longestCommonSubsequence(a: string, b: string, i: number, j:number, dp: Map<string,number>): number {
  // one of the strings is empty
  if( i==0 || j==0 ) {
    return 0
  }
  // already cached max lcs
  if(dp.has(`${i} ${j}`)) {
    console.log('[cache hit]')
    //@ts-ignore checked with .has
    return dp.get(`${i} ${j}`)
  }
  // characters are equal
  if(a[i-1] == b[j-1]) {
    const result = 1 + longestCommonSubsequence(a,b,i-1,j-1,dp)
    dp.set(`${i} ${j}`,result)
    return result
  }
  // characters are not equal
  else {
    const result = Math.max(longestCommonSubsequence(a,b,i-1,j,dp),longestCommonSubsequence(a,b,i,j-1,dp))
    dp.set(`${i} ${j}`,result)
    return result
  }
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const a = 'aobcd'
  const b = 'abed'
  const dp: Map<string,number> = new Map()
  // const a = 'abcdavrt'
  // const b = 'abedagjt'
  const r = longestCommonSubsequence(a,b,a.length,b.length,dp)
  console.log(r)
  console.log(dp)
}

Deno.bench({
  name: "baseline",
  group: 'group',
  baseline: true,
  fn: () => {
    const dp: Map<string,number> = new Map()
    const a = 'abcd'
    const b = 'abed'
    const r = longestCommonSubsequence(a,b,a.length,b.length,dp)
    // console.log(r)
  }
})

Deno.bench({
  name: "edge case",
  group: 'group',
  fn: () => {
    const dp: Map<string,number> = new Map()
    const a = 'abcdavrtjthsrhsv'
    const b = 'abedagjthuvaeeyv'
    const r = longestCommonSubsequence(a,b,a.length,b.length,dp)
    // console.log(r)
  }
})