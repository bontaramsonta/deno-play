import { assertEquals } from 'https://deno.land/std@0.201.0/assert/mod.ts';

function coinChange(coins: number[], sum: number) {
    if (sum === 0) {
        return 1;
    } else if (sum < 0 || coins.length === 0) {
        return 0;
    }
    let ways = 0;
    // include first coin
    ways += coinChange(coins, sum - coins[0]);
    // remove first coin
    ways += coinChange(coins.slice(1), sum);
    return ways;
}

if (import.meta.main) {
    const result = coinChange([1, 2, 3], 4);
    console.log(result);
    assertEquals(result, 4);
}
