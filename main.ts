function minJumps(arr: number[], n: number) {
    let jumps = 0;
    let index = 0;
    while (index < n) {
        jumps++;
        // console.log('On jump', jumps, 'index', index, 'with value', arr[index]);
        let minCostFromEnd = Number.POSITIVE_INFINITY;
        let minCostFromEndIndex = -1;
        let offset = arr[index];
        while (offset > 0) {
            const costFromEnd = n - (index + offset);
            if (costFromEnd < minCostFromEnd) {
                minCostFromEnd = costFromEnd;
                minCostFromEndIndex = index + offset;
            }
            offset--;
        }
        index = minCostFromEndIndex;
    }
    return jumps;
}
if (import.meta.main) {
    const inputs = (await Deno.readTextFile('in.txt')).split('\n').map(
        (lines) => lines.split(' ').map(Number),
    );
    inputs.forEach((input) => {
        console.log(minJumps(input, input.length));
    });
}
