function checkRotatedAndSorted(arr: number[], num: number) {
    // it is true for 1 or 2 elements arrays
    if (num === 1 || num === 2) return true;
    // compare first two elements to determine the trend
    // if first two elements are equal, compare the second and third elements
    let trend: 'asc' | 'desc' = arr[0] === arr[1]
        ? arr[1] < arr[2] ? 'asc' : 'desc'
        : arr[0] < arr[1]
        ? 'asc'
        : 'desc';
    console.log('trend', trend);
    // if the trend changes more than once, return false
    let trendChangeCount = 0;
    for (let i = 1; i < num; i++) {
        if (trend === 'asc') {
            if (i === num - 1 && arr[i] > arr[0]) {
                console.log('change trend at', i, 'to desc');
                trendChangeCount++;
                trend = 'desc';
            }
            if (arr[i] > arr[i + 1]) {
                console.log('change trend at', i, 'to desc');
                trendChangeCount++;
                trend = 'desc';
            }
        } else {
            if (i === num - 1 && arr[i] < arr[0]) {
                console.log('change trend at', i, 'to asc');
                trendChangeCount++;
                trend = 'asc';
            }
            if (arr[i] < arr[i + 1]) {
                console.log('change trend at', i, 'to asc');
                trendChangeCount++;
                trend = 'asc';
            }
        }
    }
    return trendChangeCount === 2;
}
if (import.meta.main) {
    // const inputs = (await Deno.readTextFile('in.txt')).split('\n').map(
    //     (lines) => lines.split(' ').map(Number),
    // );
    // inputs.forEach((input) => {
    //     console.log(checkRotatedAndSorted(input, input.length));
    // });
    console.log(checkRotatedAndSorted([4, 1, 2, 3], 4));
}
