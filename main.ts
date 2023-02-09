export function spiralTraversal(
  matrix: number[][],
  n: number,
  m: number,
  o = 0,
) {
  console.log("call ", o + 1);
  const result: number[] = [];
  // for top boundary
  for (let i = o; i < m - o; i++) {
    result.push(matrix[o][i]);
  }
  // for right boundary
  for (let i = 1 + o; i < n - o; i++) {
    result.push(matrix[i][m - 1 - o]);
  }
  if (n - (2 * o) !== 1) { // don't print bottom if same as top
    // for bottom boundary
    console.log("bottom", o, n - o);
    for (let i = m - 2 - o; i >= o; i--) {
      result.push(matrix[n - 1 - o][i]);
    }
  }
  if (m - (2 * o) !== 1) { // don't print if same as right
    // for left boundary
    console.log("left", o, m - o);
    for (let i = n - 2 - o; i >= 1 + o; i--) {
      result.push(matrix[i][o]);
    }
  }
  if (n - (2 * (o + 1)) > 0 && m - (2 * (o + 1)) > 0) {
    console.log("base", n, n - (2 * (o + 1)), m, m - (2 * (o + 1)));
    result.push(...spiralTraversal(matrix, n, m, o + 1));
  }
  return result;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  const n = 4;
  const m = 4;
  const result = spiralTraversal(matrix, n, m);
  console.log(result.join(" "));
}
