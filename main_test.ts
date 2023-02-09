import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { spiralTraversal } from "./main.ts";

Deno.test(function baseTest() {
  const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  const n = 4;
  const m = 4;
  assertEquals(
    spiralTraversal(matrix, n, m).join(" "),
    "1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10",
  );
});

Deno.test(function anotherTest() {
  const matrix = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
  ];
  const n = 3;
  const m = 7;
  assertEquals(
    spiralTraversal(matrix, n, m).join(" "),
    "1 2 3 4 5 6 7 14 21 20 19 18 17 16 15 8 9 10 11 12 13",
  );
});
