export function sumOfUpperAndLowerTriangles(
    matrix: number[][],
    n: number,
) {
    let upperTriangleSum = 0;
    let lowerTriangleSum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i < j) {
                upperTriangleSum += matrix[i][j];
            } else if (i > j) {
                lowerTriangleSum += matrix[i][j];
            } else {
                upperTriangleSum += matrix[i][j];
                lowerTriangleSum += matrix[i][j];
            }
        }
    }
    return [upperTriangleSum, lowerTriangleSum];
}

if (import.meta.main) {
    const matrix = [
        [6, 5, 4],
        [1, 2, 5],
        [7, 9, 7],
    ];
    const n = 3;
    const result = sumOfUpperAndLowerTriangles(matrix, n);
    console.log(result);
}
