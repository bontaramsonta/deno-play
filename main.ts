export function determinant(
    matrix: number[][],
    n: number,
) {
    if (n == 1) {
        return matrix[0][0];
    } else if (n == 2) {
        return (matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0]);
    } else {
        let result = 0;
        for (let i = 0; i < n; i++) {
            // skip if co-eff is zero
            if (matrix[0][i] !== 0) {
                // generate cofactor matrix
                const cofactor = matrix.slice(1).map((row) =>
                    row.filter((_, index) => index !== i)
                );
                if (i % 2 == 0) {
                    result += matrix[0][i] * determinant(cofactor, n - 1);
                } else {
                    result -= matrix[0][i] * determinant(cofactor, n - 1);
                }
            }
        }
        return result;
    }
}

if (import.meta.main) {
    const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
    ];
    const n = 4;
    const result = determinant(matrix, n);
    console.log(result);
}
