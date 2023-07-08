function sortByFrequency(arr: number[]) {
    const map = new Map<number, number>();
    const sortedArr: number[] = [];
    // fill frequency map
    arr.forEach((element) => {
        map.set(element, (map.get(element) || 0) + 1);
    });
    // sort map by value
    const sortedMap = new Map([...map.entries()].sort(([k1, v1], [k2, v2]) => {
        if (v1 === v2) {
            return k1 - k2;
        } else {
            return v2 - v1;
        }
    }));
    // fill sorted array
    for (const [key, value] of sortedMap.entries()) {
        for (let i = 0; i < value; i++) {
            sortedArr.push(key);
        }
    }
    return sortedArr;
}

if (import.meta.main) {
    // const arr = [2, 2, 1, 1, 3, 3, 3, 7, 5, 6, 4];
    const arr = [5, 5, 4, 6, 4];
    console.log(sortByFrequency(arr));
}
