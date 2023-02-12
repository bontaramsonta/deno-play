export function searchInRowColumnSortedMatrix(
    matrix: number[][],
    n: number,
    m: number,
    x: number,
) {
    // start looking from last element of first row
    for (let i = m; i >= 0; i--) {
        // return if element is target
        if (matrix[0][i] == x) {
            return true;
        } // if element is greater then target check in previous column
        else if (matrix[0][i] > x) {
            continue;
        } // if target is greater then check this column
        else {
            for (let j = 1; j < n; j++) {
                if (matrix[j][i] == x) {
                    return true;
                }
            }
        }
    }
    return false;
}

if (import.meta.main) {
    const matrix = [
        [3, 4, 5, 13, 13, 15, 15, 24, 30, 31],
        [13, 14, 19, 19, 27, 31, 32, 33, 35, 62],
        [14, 23, 24, 25, 36, 37, 38, 44, 44, 63],
        [30, 34, 36, 38, 40, 42, 43, 47, 55, 65],
        [36, 39, 40, 41, 42, 51, 51, 58, 59, 69],
        [43, 44, 44, 49, 56, 59, 64, 64, 75, 82],
        [46, 46, 47, 63, 64, 66, 67, 70, 85, 89],
        [54, 57, 58, 65, 67, 70, 74, 88, 88, 93],
        [70, 72, 75, 76, 90, 90, 91, 93, 93, 98],
        [84, 85, 93, 95, 96, 97, 97, 99, 100, 100],
    ];
    const n = 10;
    const m = 10;
    const x = 63;
    const result = searchInRowColumnSortedMatrix(matrix, n, m, x);
    console.log(result);
}
