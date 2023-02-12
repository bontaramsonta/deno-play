import { assertEquals } from 'https://deno.land/std@0.171.0/testing/asserts.ts';
import { determinant } from './main.ts';

Deno.test(function baseTest() {
    const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
    ];
    const n = 4;
    assertEquals(
        determinant(matrix, n),
        0,
    );
});

Deno.test(function secondTest() {
    const matrix = [
        [1, 0, 2, -1],
        [3, 0, 0, 5],
        [2, 1, 4, -3],
        [1, 0, 5, 0],
    ];
    const n = 4;
    assertEquals(
        determinant(matrix, n),
        30,
    );
});

Deno.test(function thirdTest() {
    const matrix = [
        [1, 0, 2, -1],
        [3, 0, 0, 5],
        [2, 1, 4, -3],
        [1, 0, 5, 0],
    ];
    const n = 4;
    assertEquals(
        determinant(matrix, n),
        30,
    );
});
